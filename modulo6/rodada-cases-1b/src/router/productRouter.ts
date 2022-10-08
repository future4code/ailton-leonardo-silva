import { Router } from 'express'
import { productController } from '../services/ProductDependencies';

export const productRouter = Router()

//***** POST ENDPOINTS *****/
productRouter.post("/populate", productController.populate);

//****** GET ENDPOINTS *****/
productRouter.get("/", productController.getAllProducts);
productRouter.get("/search", productController.getProductsByName);
productRouter.get("/searchTag", productController.getProductByTag);
productRouter.get("/search/:id", productController.getProductById)