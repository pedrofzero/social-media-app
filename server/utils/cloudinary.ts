import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv';
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPIKEY,
    api_secret: process.env.CLOUDAPISECRET
})

export const uploadImage = async (media: string) => {
    let image;
    await cloudinary.uploader.upload(media, {
        resource_type: 'auto'
    })
        .then(response => {
            image = response.url
        })
        return image;
}

export default cloudinary