import { Request, Response } from "express"
import { prisma } from "../utils/db"

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.status(200).send(users)
}

export const getUser = async (req: Request, res: Response) => {
    const { username } = req.params;
    
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }, select: {
            profilePicture: true,
            username: true,
            fullName: true, 
            posts: true
        }
    })

    if (user) {
        res.status(201).send(user)
    } else {
        res.status(401).send("error")
    }
}