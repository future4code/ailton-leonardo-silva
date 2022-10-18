import { BaseDatabase } from "./BaseDatabase";
import { IResultDB, Result } from "../models/Results";

export class ResultsDatabase extends BaseDatabase {
  public static TABLE_ATHLETES = "CASE_EstanteVirtual_Atletas";
  public static TABLE_CONTESTS = "CASE_EstanteVirtual_Competicoes";
  public static TABLE_ATHLETES_CONTESTS =
    "CASE_EstanteVirtual_Atletas_Competicoes";

  //Modelo de entrada de um RESULTADO no banco de dados
  public toResultsDBModel = (results: Result): IResultDB => {
    const resultDB: IResultDB = {
      athlete_id: results.getAthlete_id(),
      contest_id: results.getContest_id(),
      value: results.getValue(),
      trynumber: results.getTrynumber(),
    };
    return resultDB;
  };

  //Método para criar um RESULTADO
  public createResults = async (results: Result): Promise<void> => {
    const resultDB = this.toResultsDBModel(results);
    await this.getConnection()(ResultsDatabase.TABLE_ATHLETES_CONTESTS).insert(
      resultDB
    );
  };

  //Método para checar o UNIT de uma prova pelo ID
  async fetchUnit(id: string): Promise<any> {
    
    const result = await this.getConnection().raw(`
      SELECT * FROM ${ResultsDatabase.TABLE_CONTESTS} WHERE id = '${id}'
    `);
    
    return result[0];
  }

    //Método para verificar se as tentativas já foram executadas
    async fetchContest(athlete_id:string , contest_id: string): Promise<any> {
    
      const result = await this.getConnection().raw(`
        SELECT * FROM ${ResultsDatabase.TABLE_ATHLETES_CONTESTS} WHERE athlete_id = '${athlete_id}' AND contest_id = '${contest_id}'
      `);
      
      return result[0];
    }

  //Método para buscar os RESULTADOS de uma prova por ID
  async fetchResultsById(id: string, order: string): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT athlete_id, contest_id, MAX(value) as value, name, country, contest, unit, status, ANY_VALUE(trynumber) as trynumber FROM ${ResultsDatabase.TABLE_ATHLETES_CONTESTS} 
    INNER JOIN ${ResultsDatabase.TABLE_ATHLETES} ON ${ResultsDatabase.TABLE_ATHLETES}.id = ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.athlete_id
    INNER JOIN ${ResultsDatabase.TABLE_CONTESTS} ON ${ResultsDatabase.TABLE_CONTESTS}.id = ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.contest_id
    WHERE ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.contest_id = '${id}'
    GROUP BY ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.athlete_id
    ORDER BY MAX(value) ${order};
  `);

  
    return result[0];
  }

  
}
