import { Router } from 'express'
import { athleteController } from '../services/AthleteDependencies';

export const athleteRouter = Router()

// ***** POST ENDPOINTS *****/
athleteRouter.post("/", athleteController.signupAthlete);

// //****** GET ENDPOINTS *****/
// productRouter.get("/", productController.getAllProducts);
// productRouter.get("/search", productController.getProductsByName);
// productRouter.get("/searchTag", productController.getProductByTag);
// productRouter.get("/search/:id", productController.getProductById)