import { Request, Response } from "express"
import { prisma } from "../utils/db"
import cloudinary, { uploadImage } from "../utils/cloudinary"
import jwt from 'jsonwebtoken'
import { RequestListener } from "http"

export const createPost = async (req: Request, res: Response) => {
    const { text, media, userId } = req.body

    // upload image and save it in image variable
    try {
        const image = await uploadImage(media)

        await prisma.post.create({
            data: {
                text: text,
                media: image,
                authorId: userId,
            }
        })
        res.status(201).send("Post created successfully.")

    } catch (err) {

        return res.send(err)
    }

}

export const getPosts = async (req: Request, res: Response) => {
    const posts = prisma.post.findMany({
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
    }).then(response => {
        res.status(200).send(response)
    })
}

export const removePost = async (req: Request, res: Response) => {
    const { postId } = req.body;

    const post = prisma.post.delete({
        where: {
            id: postId
        }
    })

    res.send("Post deleted successfully.")
}

export const addComment = async (req: Request, res: Response) => {
    const { text, post, user } = req.body;
    const comment = prisma.comment.create({
        data: {
            text: text,
            authorId: user,
            postId: post
        }
    }).then(response => {
        console.log(response)
    })
    res.status(201).send("Comment sent successfully")
}