import { BaseDatabase } from "./BaseDatabase";
import { IResultDB, Result } from "../models/Results";

export class ResultsDatabase extends BaseDatabase {
  public static TABLE_ATHLETES = "CASE_EstanteVirtual_Atletas";
  public static TABLE_CONTESTS = "CASE_EstanteVirtual_Competicoes";
  public static TABLE_ATHLETES_CONTESTS =
    "CASE_EstanteVirtual_Atletas_Competicoes";

  //Modelo de entrada de ATLETA no banco de dados
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


  //Método para buscar os RESULTADOS de uma prova por ID
  async fetchResultsById(id: string, order: string): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT * FROM ${ResultsDatabase.TABLE_ATHLETES_CONTESTS} 
    INNER JOIN ${ResultsDatabase.TABLE_ATHLETES} ON ${ResultsDatabase.TABLE_ATHLETES}.id = ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.athlete_id
    INNER JOIN ${ResultsDatabase.TABLE_CONTESTS} ON ${ResultsDatabase.TABLE_CONTESTS}.id = ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.contest_id
    WHERE ${ResultsDatabase.TABLE_ATHLETES_CONTESTS}.contest_id = '${id}'
    ORDER BY value ${order};
  `);

  
    return result[0];
  }

  //   //Método para buscar todoos os ATLETAS
  //   async fetchAllAthletes(): Promise<any> {
  //     const result = await this.getConnection().raw(`
  //         SELECT * FROM ${AthleteDatabase.TABLE_ATHLETES}
  //     `);
  //     return result[0];
  //   }

  //   public findByContest = async (contest: string): Promise<IContestDB | undefined> => {
  //     const result: IContestDB[] = await this.getConnection()(ContestDatabase.TABLE_CONTESTS)
  //         .select()
  //         .where({ contest })

  //     return result[0]
  // }

  // //Método para verificar se um determinado ATLETA já está cadastrado
  // async fetchAthleteByName(search: string): Promise<any> {
  //   console.log("search" , search)
  //   const result = await this.getConnection().raw(`
  //       SELECT * FROM ${AthleteDatabase.TABLE_ATHLETES} WHERE name LIKE '%${search}%'
  //   `);
  //   return result[0];
  // }

  // async fetchAllProducts(): Promise<any> {
  //   const result = await this.getConnection().raw(`
  //       SELECT * FROM ${AthleteDatabase.TABLE_ATHLETES_CONTESTS}
  //       INNER JOIN ${AthleteDatabase.TABLE_ATHLETES} ON ${AthleteDatabase.TABLE_ATHLETES}.id = ${AthleteDatabase.TABLE_ATHLETES_CONTESTS}.produto_id
  //       INNER JOIN ${AthleteDatabase.TABLE_CONTESTS} ON ${AthleteDatabase.TABLE_CONTESTS}.id = ${AthleteDatabase.TABLE_ATHLETES_CONTESTS}.tag_id;
  //   `);
  //   return result[0];
  // }

  // //Método para buscar as TAGS por ID
  // async fetchTags(id: string): Promise<any> {
  //   const result = await this.getConnection().raw(`
  //     SELECT * FROM ${ProductDatabase.TABLE_TAGS} WHERE id = ${id}
  //   `);
  //   return result[0];
  // }

  // //Método para buscar as TAGS de um produto por sua ID
  // async fetchTagsById(id: string): Promise<any> {
  //   const result = await this.getConnection().raw(`
  //       SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS_TAGS} WHERE produto_id = ${id}
  //   `);
  //   return result[0];
  // }

  // //Método para buscar os produtos pela tag
  // async selectProductByTag(search: string): Promise<any> {
  //   const result = await this.getConnection().raw(`
  //       SELECT * FROM ${ProductDatabase.TABLE_TAGS} WHERE tag LIKE '%${search}%'
  //   `);
  //   return result[0];
  // }

  // //Método para buscar os produtos por sua TAG
  // async fetchProductsByTag(id: string): Promise<any> {
  //   const result = await this.getConnection().raw(`
  //       SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS_TAGS} WHERE tag_id = ${id}
  //   `);
  //   return result[0];
  // }
}
