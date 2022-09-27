import { Request, Response, Router } from "express";
import { createPost, getPosts, removePost } from "../controllers/post";
import { verifyJWT } from "../middleware/jwt";

export const postRouter = Router()


postRouter.post('/createPost', verifyJWT, createPost)
postRouter.post('/removePost', verifyJWT, removePost)
postRouter.get('/getAllPosts', verifyJWT, getPosts)