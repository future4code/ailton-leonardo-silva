import { Athelete, IAthleteDB } from "../models/Atheletes";
import { BaseDatabase } from "./BaseDatabase";

export class AthleteDatabase extends BaseDatabase {
  public static TABLE_ATHLETES = "CASE_EstanteVirtual_Atletas";
  public static TABLE_CONTESTS = "CASE_EstanteVirtual_Competicoes";
  public static TABLE_ATHLETES_CONTESTS = "CASE_EstanteVirtual_Atletas_Competicoes";

  //Modelo de entrada de ATLETA no banco de dados
  public toAthleteDBModel = (athelete: Athelete): IAthleteDB => {
    const athleteDB: IAthleteDB = {
        id: athelete.getId(),
        name: athelete.getName(),
        country: athelete.getCountry()
    }
    return athleteDB
}

  //Método para criar um ATLETA
  public createAthlete = async (athelete: Athelete): Promise<void> => {
    const athleteDB = this.toAthleteDBModel(athelete)
    await this.getConnection()(AthleteDatabase.TABLE_ATHLETES)
        .insert(athleteDB)
}

  //Método para buscar todoos os ATLETAS
  async fetchAllAthletes(): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${AthleteDatabase.TABLE_ATHLETES}
    `);
    return result[0];
  }
  
  public findByName = async (name: string): Promise<IAthleteDB | undefined> => {
    const result: IAthleteDB[] = await this.getConnection()(AthleteDatabase.TABLE_ATHLETES)
        .select()
        .where({ name })

    return result[0]
}


  
}