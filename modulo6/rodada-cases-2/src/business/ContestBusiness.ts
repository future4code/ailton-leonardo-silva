import { ContestDatabase } from "../database/ContestDatabase";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { Contest, ContestUpdate, CONTEST_STATUS, CONTEST_UNIT, ISignupInputDTO, ISignupOutputDTO, IUpdateDBDTO, IUpdateOutputDTO } from "../models/Contests";

import { IdGenerator } from "../services/IdGenerator";

export class ContestBusiness {
    
    constructor(
        private contestDatabase: ContestDatabase,
        private idGenerator: IdGenerator,
    ) {}

        //*****   CRIAR UMA COMPETIÇÃO   *****
        public signupContest = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
            const { contest , unit } = input
            let status = input.status
            
            //Checagens do parâmetro CONTEST
            if (typeof contest !== "string") {
                throw new RequestError("Parâmetro 'contest' inválido: deve ser uma string.")
            }
            
            if (!contest) {
                throw new ParamsError("Parâmetro 'contest' não informado.")
            }

            if (contest.length < 3) {
                throw new RequestError("Parâmetro 'contest' inválido: mínimo de 3 caracteres")
            }

            //Checagens do parâmetro UNIT
            if (!unit) {
                throw new ParamsError("Parâmetro 'unit' não informado.")
            }

            if (unit !== CONTEST_UNIT.S && unit !== CONTEST_UNIT.M) {
                throw new ConflictError("Parâmetro 'unit' inválido: deve ser o ENUM 'M' ou 'S'.")
            }


            if (!status) {
                status = CONTEST_STATUS.ABERTA
            }
    
            
            //Check se a prova já está cadastrado no BD
            const isContestAlreadyExists = await this.contestDatabase.findByContest(contest)
            
            if (isContestAlreadyExists) {
                throw new ConflictError("Prova já cadastrada.")
            }
    
            const id = this.idGenerator.generate()
            
            const inputContest = new Contest(
                id,
                contest,
                unit,
                status
            )
            
            await this.contestDatabase.createContest(inputContest)
            
            const response: ISignupOutputDTO = {
                message: "Cadastro realizado com sucesso.",
                contest : `Prova ${contest}`
            }
    
            return response
        }

        //*****   EDITAR UMA COMPETIÇÃO   *****
        public updateContest = async (input: IUpdateDBDTO): Promise<IUpdateOutputDTO> => {
            const id = input.id
            let status = input.status as CONTEST_STATUS
            
            //Checagens do parâmetro ID
            if (typeof id !== "string") {
                throw new RequestError("Parâmetro 'id' inválido: deve ser uma string.")
            }
            
            if (!id || id === ":id") {
                throw new ParamsError("Parâmetro 'id' não informado.")
            }

            //Checagens do parâmetro STATUS
            if (!status) {
                throw new ParamsError("Parâmetro 'status' não informado.")
            }

            if (status !== CONTEST_STATUS.ABERTA && status !== CONTEST_STATUS.ENCERRADA && status !== CONTEST_STATUS.INICIADA) {
                throw new ConflictError("Parâmetro 'status' inválido: deve ser o ENUM 'ABERTA', 'INICIADA' ou 'ENCERRADA'.")
            }

            //Check se a prova já está cadastrado no BD
            const isContestAlreadyExists = await this.contestDatabase.findByContestId(id)
            
            if (!isContestAlreadyExists) {
                throw new ConflictError("Prova não encontrada.")
            }
            
            const update = new ContestUpdate (id, status)

            await this.contestDatabase.updateContest(update)
            
            const response: IUpdateOutputDTO | any = {
                message: "Prova atualizada com sucesso.",
                status : `Status da prova: ${status}`
            }
    
            return response
        }
        
    }

