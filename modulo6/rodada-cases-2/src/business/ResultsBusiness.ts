import { ContestDatabase } from "../database/ContestDatabase";
import { ResultsDatabase } from "../database/ResultsDatabase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { RequestError } from "../errors/RequestError";
import { CONTEST_STATUS, CONTEST_UNIT } from "../models/Contests";
import { IResultInputDTO, IResultOutputDTO, Result, RESULTS_TRY } from "../models/Results";



export class ResultsBusiness {
    
    constructor(
        private resultsDatabase: ResultsDatabase,
        private contestDatabase: ContestDatabase
    ) {}

        //*****   CRIAR UM RESULTADO  *****
        public createResults = async (input: IResultInputDTO): Promise<IResultOutputDTO> => {
            const { athlete_id , contest_id , value } = input
            let trynumber = input.trynumber
            //Checagens do parâmetro ATHLETE_ID
            if (typeof athlete_id !== "string") {
                throw new RequestError("Parâmetro 'athlete_id' inválido: deve ser uma string.")
            }
            
            if (!athlete_id) {
                throw new ParamsError("Parâmetro 'athlete_id' não informado.")
            }

            //Checagens do parâmetro contest_id, checagem para seber se a prova está encerrada.
            if (!contest_id) {
                throw new ParamsError("Parâmetro 'contest_id' não informado.")
            }

            if (!contest_id) {
                throw new ParamsError("Parâmetro 'contest_id' não informado.")
            }

            const isContestFinished = await this.contestDatabase.findByContestId(contest_id)
            if (isContestFinished.status === CONTEST_STATUS.ENCERRADA) {
                throw new ConflictError ("Não foi possível cadastrar o resultado, a prova já foi encerrada.")
            }

            //Checagem do parâmetro VALUE
            if (!value) {
                throw new ParamsError("Parâmetro 'value' não informado.")
            }

            //Checagem do TRYNUMBER
            console.log("Trynumber", trynumber)
            if (!trynumber) {
                trynumber = RESULTS_TRY.ZERO
            }

            const inputResults = new Result(
                athlete_id,
                contest_id,
                value,
                trynumber
            )
            
            await this.resultsDatabase.createResults(inputResults)
            
            const response: IResultOutputDTO = {
                message: "Resultado cadastrado com sucesso.",
            }
    
            return response
        }


        //*****   SELECIONAR TODOS OS RESULTADOS DA PROVA   *****
        public selectAllResults = async (id:string) => {
            
            if (!id) {
                throw new ParamsError("Parâmetro 'id' não informado.")
            }
            
            let order = await this.resultsDatabase.fetchUnit(id)
            
            if (!order) {
                throw new Error ("Prova não encontrada.") 
            }

            
            if (order[0].unit === CONTEST_UNIT.M) {
                order = "DESC"
            } else { 
                order = "ASC"
            }
            
            const result = await this.resultsDatabase.fetchResultsById(id, order);

            console.log(result)
            
            if (result.length === 0) {
                throw new NotFoundError ("Prova não encontrada.")
            }
            
            const mapContest = result.flatMap((info:any) => {
                return info.contest
            })
            const mapSemRepeticao:any = [...new Set(mapContest)]

            const mapResult = result.map((info:any) => {
                return {Atleta: info.name, País: info.country, Valor: info.value , Unidade: info.unit, Tentativa: info.trynumber}
            })

            console.log("Map Resulut", mapResult)

            return { Prova: mapSemRepeticao , Competidores: mapResult };
        };
        
    }

