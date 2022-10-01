import { Request, Response } from "express"
import { prisma } from "../utils/db"
import { uploadImage } from "../utils/cloudinary"

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
    const posts = await prisma.post.findMany({
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

export const getPost = async (req: Request, res: Response) => {
    const { user, postId } = req.body

    const post = await prisma.post.findFirstOrThrow({
        where: {
            OR: {
                id: postId,
                author: {
                    username: user
                }
            },
        },
        select: {
            id: true,
            text: true,
            media: true,
            author: {
                select: {
                    username: true,
                }
            },
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
    }).catch(err => {
        res.status(401).send(err)
    })
}

export const deletePost = async (req: Request, res: Response) => {
    const { postId } = req.body;

    const post = await prisma.post.delete({
        where: {
            id: postId
        }
    })

    res.send("Post deleted successfully.")
}

export const newComment = async (req: Request, res: Response) => {
    const { text, post, user } = req.body;
    const comment = await prisma.comment.create({
        data: {
            text: text,
            authorId: user,
            postId: post
        }
    }).then(response => {
        res.status(201).send(response)
    })
    
}

export const deleteComment = async(req: Request, res: Response) => {
    const { commentId } = req.body;
    const deleteComment = await prisma.comment.delete({
        where: {
            id: commentId
        }
    })

    res.send("Comment deleted successfully.")
}