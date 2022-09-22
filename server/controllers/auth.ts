import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { prisma } from "../utils/db"
import jwt from 'jsonwebtoken'

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(401).send("No username or password. Please try again")
    }

    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    if (!user) {
        return res.status(401).send("This user doesn't exist. Please try again")
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return res.status(401).send("Password is incorrect. Please try again")
    } else {
        const accessToken = jwt.sign({ username }, "secret", { expiresIn: "5m" })
        const refreshToken = jwt.sign({ username }, "secret", { expiresIn: "1d" })
        res.cookie('token', refreshToken, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
        res.json({
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