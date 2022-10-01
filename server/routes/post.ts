import { Request, Response, Router } from "express";
import { createPost, deleteComment, getPost, getPosts, newComment, deletePost } from "../controllers/post";
import { getUserPosts } from "../controllers/users";
import { verifyJWT } from "../middleware/jwt";

export const postRouter = Router()

postRouter.post('/createPost', verifyJWT, createPost)
postRouter.post('/deletePost', verifyJWT, deletePost)
postRouter.post('/getPost', verifyJWT, getPost)
postRouter.get('/getAllPosts', verifyJWT, getPosts)

postRouter.post('/getUserPosts', verifyJWT, getUserPosts)

postRouter.post('/newComment', verifyJWT, newComment)
postRouter.post('/deleteComment', verifyJWT, deleteComment)