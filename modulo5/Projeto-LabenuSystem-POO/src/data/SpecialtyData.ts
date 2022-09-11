import BaseDataBase from "./BaseDataBase";
import Specialty from "../model/Specialty";

class SpecialtyData extends BaseDataBase {
  
  //CHAMADA PARA CRIAÇÃO DE ESPECIALIDADE
  async insertSpecialty(especialidade: Specialty): Promise<void> {
    await this.getConnection()
      .insert({
        id: especialidade.getIdSpecialty(),
        nome: especialidade.getName(),
      })
      .into("Especialidade_POO");
  }
  //Novos Métodos
  
}

export default SpecialtyData;