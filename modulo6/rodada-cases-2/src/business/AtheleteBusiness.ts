import { AthleteDatabase } from "../database/AthleteDatabase";
import { ConflictError } from "../errors/ConflictError";
import { RequestError } from "../errors/RequestError";
import { Athelete, ISignupInputDTO, ISignupOutputDTO } from "../models/Atheletes";
import { IdGenerator } from "../services/IdGenerator";

export class AthleteBusiness {
    
    constructor(
        private athleteDatabase: AthleteDatabase,
        private idGenerator: IdGenerator,
    ) {}

        //*****   CRIAR UM ATLETA   *****
        public signupAthlete = async (input: ISignupInputDTO): Promise<ISignupOutputDTO> => {
            const { name , country} = input
            
            if (typeof name !== "string") {
                throw new RequestError("Parâmetro 'name' inválido: deve ser uma string.")
            }
    
            if (typeof country !== "string") {
                throw new RequestError("Parâmetro 'país' inválido: deve ser uma string.")
            }
            
            if (!name) {
                throw new RequestError("Parâmetro 'name' não informado.")
            }

            if (name.length < 3) {
                throw new RequestError("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }

            if (!country) {
                throw new RequestError("Parâmetro 'país' não informado.")
            }

            if (country.length < 3) {
                throw new RequestError("Parâmetro 'país' inválido: mínimo de 3 caracteres")
            }
    
            
            //Check se o atleta já está cadastrado no BD
            const isAthleteAlreadyExists = await this.athleteDatabase.findByName(name)
            
            if (isAthleteAlreadyExists) {
                throw new ConflictError("Atleta já cadastrado.")
            }
    
            const id = this.idGenerator.generate()
            
            const athelete = new Athelete(
                id,
                name,
                country
            )
            
            await this.athleteDatabase.createAthlete(athelete)
            
            const response: ISignupOutputDTO = {
                message: "Cadastro realizado com sucesso.",
                name : `Atleta ${name}`
            }
    
            return response
        }
        
    }

