import { Request, Response } from "express";
import { ResultsBusiness } from "../business/ResultsBusiness";
import { BaseError } from "../errors/BaseError";
import { IResultInputDTO } from "../models/Results";


export class ResultsController {

    constructor(
        private resultsBusiness: ResultsBusiness
    ) {}
    
        //******************************************************************/
        //*************   MÉTODO - CRIAR OS RESULTADOS   *******************/
        //******************************************************************/
        public createResults = async (req: Request, res: Response) =>  {
            try {
                const input: IResultInputDTO = {
                    athlete_id: req.body.athlete_id,
                    contest_id: req.body.contest_id,
                    value: req.body.value,
                    trynumber: req.body.trynumber
                }
                
                const response = await this.resultsBusiness.createResults(input);
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
        //*******  MÉTODO - BUSCAR TODOS OS RESULTADOS DE UMA PROVA  *******/
        //******************************************************************/
        public getAllResults = async (req: Request, res: Response) =>  {
            try {
                const id = req.body.id as string

                const response = await this.resultsBusiness.selectAllResults(id);
                res.status(200).send( response );
            }
            catch (error) {
                res.status(500).send({ message: error.message });
            }
        };
    }