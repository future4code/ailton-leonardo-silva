import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

const userController = new UserController()

// Método de criação de usuário
userRouter.post("/signup", userController.createUser)

