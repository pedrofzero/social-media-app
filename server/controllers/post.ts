import { Request, Response } from "express"
import { prisma } from "../utils/db"
import cloudinary from "../utils/cloudinary"

export const createPost = async (req: Request, res: Response) => {
    const { text, username, media } = req.body
    let image;

    // upload image and save it in image variable
    try {
        await cloudinary.uploader.upload(media, {
            resource_type: 'auto'
        })
            .then(response => {
                image = response.url
            })

        // get user's id
        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })

        await prisma.post.create({
            data: {
                text: text,
                authorId: `${user?.id}`,
                media: image
            }
        })
        res.status(201).send("Post created successfully.")
   
    } catch (err) {
        return err
    }


}

export const getPosts = async (req: Request, res: Response) => {
    const posts = prisma.post.findMany().then(response => {
        res.status(200).send(response)

    })
    
}