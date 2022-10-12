import { Contest, ContestUpdate, CONTEST_STATUS, IContestDB, IUpdateDB } from "../models/Contests";
import { BaseDatabase } from "./BaseDatabase";

export class ContestDatabase extends BaseDatabase {
  public static TABLE_ATHLETES = "CASE_EstanteVirtual_Atletas";
  public static TABLE_CONTESTS = "CASE_EstanteVirtual_Competicoes";
  public static TABLE_ATHLETES_CONTESTS =
    "CASE_EstanteVirtual_Atletas_Competicoes";

  //Modelo de entrada de COMPETIÇÃO no banco de dados
  public toContestDBModel = (contest: Contest): IContestDB => {
    const contestDB: IContestDB = {
      id: contest.getId(),
      contest: contest.getContest(),
      unit: contest.getUnit(),
      status: contest.getStatus(),
    };
    return contestDB;
  };

  //Método para criar uma PROVA
  public createContest = async (contest: Contest): Promise<void> => {
    const contestDB = this.toContestDBModel(contest);
    await this.getConnection()(ContestDatabase.TABLE_CONTESTS).insert(
      contestDB
    );
  };

  //Método para atualizar uma PROVA
  public updateContest = async (updateStatus: ContestUpdate): Promise<void> => {
    await this.getConnection()
      .update({ status: updateStatus.getStatus() })
      .into(ContestDatabase.TABLE_CONTESTS)
      .where({ id: updateStatus.getId() });
  };

  public findByContest = async (
    contest: string
  ): Promise<IContestDB | undefined> => {
    const result: IContestDB[] = await this.getConnection()(
      ContestDatabase.TABLE_CONTESTS
    )
      .select()
      .where({ contest });

    return result[0];
  };

  public findByContestId = async (
    id: string
  ): Promise<IContestDB | undefined> => {
    const result: IContestDB[] = await this.getConnection()(
      ContestDatabase.TABLE_CONTESTS
    )
      .select()
      .where({ id });

    return result[0];
  };
}
