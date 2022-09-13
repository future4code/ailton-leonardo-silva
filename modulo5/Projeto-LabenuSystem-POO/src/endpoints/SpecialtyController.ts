import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import SpecialtyData from "../data/SpecialtyData";
import Specialty from "../model/Specialty";

class SpecialtyController {
  //CRIAÇÃO DE ESPECIALIDADE
  async createSpecialty(req: Request, res: Response) {
    try {
      const nome = req.body.nome;
      //Gerando um número de Id aleatório.
      let id = uuidv4();

      if (!nome) {
        throw new Error("O nome não foi informado corretamente.");
      }

      //Instancia uma novo hobby.
      const especialidade = new Specialty(id, nome);

      //Instancia a classe no banco de dados.
      const specialtyData = new SpecialtyData();
      const answer = await specialtyData.insertSpecialty(especialidade);

      res.status(201).send({
        id: id,
        nome: nome,
      });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

 
}

export default SpecialtyController;
