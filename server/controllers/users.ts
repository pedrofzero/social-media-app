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
        }
    })

    if (user) {
        res.status(201).send(user)
    } else {
        res.status(401).send("error")
    }
}

export const getUserPosts = async (req: Request, res: Response) => {
    const { username } = req.params;
    
    const posts = await prisma.post.findMany({
        where: {
            author: {
                username
            }
        },
        select: {
            author: {
                select: {
                    username: true
                }
            },
            id: true,
            text: true,
            media: true,
            comments: {
                select: {
                    createdAt: true,
                    id: true,
                    text: true,
                    author: {
                        select: {
                            username: true,
                            profilePicture: true,
                            fullName: true,
                        }
                    }
                }
            }
        }
    })

    if (posts) {
        res.status(201).send(posts)
    } else {
        res.status(401).send("No posts from this user.")
    }
}