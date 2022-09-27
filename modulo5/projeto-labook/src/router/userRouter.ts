import { Router } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { userController } from '../services/UserDependencies'

export const userRouter = Router()

//ENDPOINTS

// *** POST - ENDPOINTS *** 
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
