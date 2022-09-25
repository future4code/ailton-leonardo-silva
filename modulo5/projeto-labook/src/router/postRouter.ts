import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)
// ******  GET - ENDPOINTS ****** 
postRouter.get("/", postController.getAllPosts)

// ****** POST - ENDPOINTS ****** 
postRouter.post("/", postController.createPost)
postRouter.post("/like/:id", postController.createLike)

// ***** DELETE - ENDPOINTS ***** 
postRouter.delete("/:id", postController.deletePosts)
postRouter.delete("/like/:id", postController.deleteLike)
