import { Request, Response, Router } from "express";
import { createPost, getPosts } from "../controllers/post";
import { verifyJWT } from "../middleware/jwt";

export const postRouter = Router()


postRouter.post('/createPost', verifyJWT, createPost)
postRouter.get('/getAllPosts', verifyJWT, getPosts)