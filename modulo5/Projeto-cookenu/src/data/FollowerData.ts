import * as jwt from "jsonwebtoken";
import Follower from "../model/Follower";
import BaseDataBase from "./BaseDataBase";

class FollowerData extends BaseDataBase {
  
  //***** INSERÇÃO NO BANCO DE DADOS *****
  async insertFollowUser(follower: Follower): Promise<void> {
    await this.getConnection()
      .insert({
        id: follower.getId(),
        user_id: follower.getUserId(),
        following_id: follower.getFollowingId(),
      })
      .into("Followers_Projeto_Cookenu");
  }

  async fetchFollowerById(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT * FROM Followers_Projeto_Cookenu WHERE user_id LIKE '${id}'
  `);
    return result[0];
  }

  //********** DELEÇÃO DO BANCO DE DADOS **********
  async deleteFollowUser(userid:string, followid:string): Promise<void> {
    await this.getConnection().raw(`
    DELETE FROM Followers_Projeto_Cookenu WHERE following_id LIKE '${followid}' AND user_id LIKE '${userid}'
  `);
  }

  //********** DELEÇÃO DO BANCO DE DADOS **********
  // USADO NA EXCLUSÃO DO USUÁRIO DO BD, ENTÃO ELE DEVE SER EXCLUIDO DO SEGUINDO E DOS SEGUIDORES
  async deleteUserAndFollowers(id:string): Promise<void> {
    await this.getConnection().raw(`
    DELETE FROM Followers_Projeto_Cookenu WHERE following_id LIKE '${id}' OR user_id LIKE '${id}'
  `);
  }

}



export default FollowerData;
