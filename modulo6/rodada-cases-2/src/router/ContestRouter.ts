import { Router } from 'express'
import { contestController } from '../services/ContestDependencies';

export const contestRouter = Router()

// ***** POST ENDPOINTS *****/
contestRouter.post("/", contestController.signupContest);

//****** GET ENDPOINTS *****/

//****** PUT ENDPOINTS *****/
contestRouter.put("/:id", contestController.editContest);
