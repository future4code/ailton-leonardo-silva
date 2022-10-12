import { Request, Response } from "express";
import { ContestBusiness } from "../business/ContestBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO, IUpdateDBDTO } from "../models/Contests";


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

        //******************************************************************/
        //**********   MÉTODO - UPDATE STATUS DA COMPETIÇÃO   **************/
        //******************************************************************/
        public editContest = async (req: Request, res: Response) =>  {
            try {
                const input: IUpdateDBDTO = {
                    id: req.params.id,
                    status: req.body.status
                }
                
                const response = await this.contestBusiness.updateContest(input);
                res.status(200).send({ Mensagem: response });
            }
            catch (error: unknown) {
                if (error instanceof BaseError) {
                    return res.status(error.statusCode).send({ message: error.message })
                }
    
                res.status(500).send({ message: "Erro inesperado ao editar a competição." })
            }
        };

    }

