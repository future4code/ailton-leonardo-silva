import { Request, Response } from "express";
import { ContestBusiness } from "../business/ContestBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO } from "../models/Contests";


export class ContestController {

    constructor(
        private contestBusiness: ContestBusiness
    ) {}
    
        //******************************************************************/
        //*************   MÉTODO - CRIAR UMA COMPETIÇÃO   ******************/
        //******************************************************************/
        public signupContest = async (req: Request, res: Response) =>  {
            try {
                const input: ISignupInputDTO = {
                    contest: req.body.contest,
                    unit: req.body.unit
                }
                
                const response = await this.contestBusiness.signupContest(input);
                res.status(201).send({ Mensagem: response });
            }
            catch (error: unknown) {
                if (error instanceof BaseError) {
                    return res.status(error.statusCode).send({ message: error.message })
                }
    
                res.status(500).send({ message: "Erro inesperado ao criar uma competição." })
            }
        };
    }

