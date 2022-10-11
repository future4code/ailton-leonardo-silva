import { ContestDatabase } from "../database/ContestDatabase";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { Contest, CONTEST_STATUS, CONTEST_UNIT, ISignupInputDTO, ISignupOutputDTO } from "../models/Contests";

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
            console.log(unit)

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
    
            
            //Check se o atleta já está cadastrado no BD
            // const isAthleteAlreadyExists = await this.athleteDatabase.findByName(name)
            
            // if (isAthleteAlreadyExists) {
            //     throw new ConflictError("Atleta já cadastrado.")
            // }
    
            const id = this.idGenerator.generate()
            
            const inputContest = new Contest(
                id,
                contest,
                unit,
                status
            )
            
            await this.contestDatabase.createAthlete(inputContest)
            
            const response: ISignupOutputDTO = {
                message: "Cadastro realizado com sucesso.",
                contest : `Prova ${contest}`
            }
    
            return response
        }
        
    }

