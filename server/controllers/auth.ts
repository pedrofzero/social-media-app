import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { prisma } from "../utils/db"
import jwt, { JsonWebTokenError } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).send("No username or password. Please try again")
    }

    // find if user exists
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    if (!user) {
        return res.status(401).send("This user doesn't exist. Please try again")
    }

    // validate password
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return res.status(401).send("Password is incorrect. Please try again")
    } else {

        // generate tokens
        const accessToken = jwt.sign({ username, role: user.role }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: "30s" })
        const refreshToken = jwt.sign({ username, role: user.role }, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: "1d" })

        // add refresh token to dataabase
        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: user.id
            }
        })

        res.cookie('token', refreshToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
        res.json({
            user: user.username,
            userId: user.id,
            accessToken: accessToken,
            refreshToken: refreshToken
        })
    }
}

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !password) {
        return res.status(401).send("Please enter username or password")
    }

    const userExists = await prisma.user.findFirst({
        where: {
            username: username
        }
    })

    if (userExists?.username) {
        return res.status(401).send("This user already exists. Please try another username")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const createUser = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword
        }
    })

    return res.status(201).send("User registered successfully.")

}

export const refreshToken = async (req: Request, res: Response) => {

    if (!req.cookies?.token) {
        return res.status(403).send("Refresh token is required.")
    }

    try {
        const refreshToken = req.cookies.token;
        // console.log(refreshToken)

        let token = await prisma.refreshToken.findFirst({
            where:
            {
                token: refreshToken
            }
        })

        // eventually, the model will have an expiry date, and we can just verify it here. if it has expired, we delete it from the database.

        if (!token) {
            return res.status(403).send("Refresh token is not on the database.")
        }

        // token exists, we verify it and send the new access token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err: any, decoded: any) => {
            if (err) {
                res.send(err)
            }
            if (decoded) {
                const user = decoded.username
                const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '30s' })
                res.json({ accessToken: accessToken })
            }
        })


    } catch (err) {
        res.status(401).send(err)
    }
}