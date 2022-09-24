import { Request, Response } from "express"
import { prisma } from "../utils/db"

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.status(200).send(users)
}
