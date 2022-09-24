import { Router } from "express";
import { getAllUsers } from "../controllers/users";
import { verifyJWT } from "../middleware/jwt";

export const usersRouter = Router()

usersRouter.get('/getAllUsers', verifyJWT, getAllUsers)