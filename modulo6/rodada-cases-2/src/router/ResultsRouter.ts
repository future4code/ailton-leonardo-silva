import { Router } from 'express'
import { resultsController } from '../services/ResultsDependencies';

export const resultsRouter = Router()

// ***** POST ENDPOINTS *****/
resultsRouter.post("/", resultsController.createResults);

//****** GET ENDPOINTS *****/
resultsRouter.get("/", resultsController.getAllResults);
