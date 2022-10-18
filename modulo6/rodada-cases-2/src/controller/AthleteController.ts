import { Request, Response } from "express";
import { AthleteBusiness } from "../business/AtheleteBusiness";
import { BaseError } from "../errors/BaseError";
import { ISignupInputDTO } from "../models/Atheletes";

export class AtheleteController {

    constructor(
        private atheleteBusiness: AthleteBusiness
    ) {}
    
        //******************************************************************/
        //****************   MÉTODO - CRIAR UM ATLETA   ********************/
        //******************************************************************/
        public signupAthlete = async (req: Request, res: Response) =>  {
            try {
                const input: ISignupInputDTO = {
                    name: req.body.name,
                    country: req.body.country
                }
                
                const response = await this.atheleteBusiness.signupAthlete(input);
                res.status(201).send({ Mensagem: response });
            }
            catch (error: unknown) {
                if (error instanceof BaseError) {
                    return res.status(error.statusCode).send({ message: error.message })
                }
    
                res.status(500).send({ message: "Erro inesperado ao criar um atleta." })
            }
        };
    }

