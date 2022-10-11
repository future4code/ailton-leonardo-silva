import { Router } from 'express'
import { contestController } from '../services/ContestDependencies';

export const contestRouter = Router()

// ***** POST ENDPOINTS *****/
contestRouter.post("/", contestController.signupContest);

// //****** GET ENDPOINTS *****/
// productRouter.get("/", productController.getAllProducts);
// productRouter.get("/search", productController.getProductsByName);
// productRouter.get("/searchTag", productController.getProductByTag);
// productRouter.get("/search/:id", productController.getProductById)