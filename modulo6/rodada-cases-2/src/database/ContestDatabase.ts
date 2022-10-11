
import { Contest, IContestDB } from "../models/Contests";
import { BaseDatabase } from "./BaseDatabase";

export class ContestDatabase extends BaseDatabase {
  public static TABLE_ATHLETES = "CASE_EstanteVirtual_Atletas";
  public static TABLE_CONTESTS = "CASE_EstanteVirtual_Competicoes";
  public static TABLE_ATHLETES_CONTESTS = "CASE_EstanteVirtual_Atletas_Competicoes";

  //Modelo de entrada de ATLETA no banco de dados
  public toAthleteDBModel = (contest: Contest): IContestDB => {
    const contestDB: IContestDB = {
        id: contest.getId(),
        contest: contest.getContest(),
        unit: contest.getUnit(),
        status: contest.getStatus()
    }
    return contestDB
}

  //Método para criar uma PROVA
  public createAthlete = async (contest: Contest): Promise<void> => {
    const contestDB = this.toAthleteDBModel(contest)
    await this.getConnection()(ContestDatabase.TABLE_CONTESTS)
        .insert(contestDB)
}

//   //Método para buscar todoos os ATLETAS
//   async fetchAllAthletes(): Promise<any> {
//     const result = await this.getConnection().raw(`
//         SELECT * FROM ${AthleteDatabase.TABLE_ATHLETES}
//     `);
//     return result[0];
//   }
  
//   public findByName = async (name: string): Promise<IAthleteDB | undefined> => {
//     const result: IAthleteDB[] = await this.getConnection()(AthleteDatabase.TABLE_ATHLETES)
//         .select()
//         .where({ name })

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

  // //Método para buscar os PRODUTOS por ID
  // async fetchProductsById(id: string): Promise<any> {
  //   const result = await this.getConnection().raw(`
  //     SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS} WHERE id = ${id}
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