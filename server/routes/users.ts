import { Router } from "express";
import { getAllUsers } from "../controllers/users";
import { verifyJWT } from "../middleware/jwt";
import { verifyRoleUser } from "../middleware/role";

export const usersRouter = Router()

usersRouter.get('/getAllUsers', verifyJWT, verifyRoleUser, getAllUsers)