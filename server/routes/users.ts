import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/users";
import { verifyJWT } from "../middleware/jwt";
import { verifyRoleUser } from "../middleware/role";

export const usersRouter = Router()

usersRouter.get('/getAllUsers', verifyJWT, verifyRoleUser, getAllUsers)
usersRouter.post('/:username', verifyJWT, verifyRoleUser, getUser)