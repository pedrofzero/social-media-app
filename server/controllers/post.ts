import { Request, Response } from "express"
import { prisma } from "../utils/db"
import cloudinary from "../utils/cloudinary"
import jwt from 'jsonwebtoken'

export const createPost = async (req: Request, res: Response) => {
    const { text, media, userId } = req.body
    let image;

    // upload image and save it in image variable
    try {
        await cloudinary.uploader.upload(media, {
            resource_type: 'auto'
        })
            .then(response => {
                image = response.url
            })

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
    const posts = prisma.post.findMany().then(response => {
        res.status(200).send(response)

    })
    
}