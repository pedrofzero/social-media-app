import { Request, Response, Router } from "express";
import { createPost, getPost, getPosts, newComment, removePost } from "../controllers/post";
import { verifyJWT } from "../middleware/jwt";

export const postRouter = Router()

postRouter.post('/createPost', verifyJWT, createPost)
postRouter.post('/removePost', verifyJWT, removePost)
postRouter.post('/getPost', verifyJWT, getPost)
postRouter.get('/getAllPosts', verifyJWT, getPosts)

postRouter.post('/newComment', verifyJWT, newComment)