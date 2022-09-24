import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

export const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers['authorization']
    if (!authorization) { return res.status(401).send("You don't have authorization to access this content")}
    const token = authorization.split(' ')[1]

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err, decoded) => {
        if (err) return res.status(401).send(err)
        // res.send(decoded)
        next()
    })
}