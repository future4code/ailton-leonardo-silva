import BaseDataBase from "./BaseDataBase";
import Hobby from "../model/Hobby";

class HobbyData extends BaseDataBase {
  
  //CHAMADA PARA CRIAÇÃO DE HOBBIES
  async insertHobby(hobby: Hobby): Promise<void> {
    await this.getConnection()
      .insert({
        id: hobby.getIdHobby(),
        nome: hobby.getName(),
      })
      .into("Hobby_POO");
  }
  //Novos Métodos
  
}

export default HobbyData;
