import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import HobbyData from "../data/HobbyData";
import Hobby from "../model/Hobby";

class HobbyController {
  //CRIAÇÃO DE HOBBY
  async createHobby(req: Request, res: Response) {
    try {
      const nome = req.body.nome;
      //Gerando um número de Id aleatório.
      let id = uuidv4();

      if (!nome) {
        throw new Error("O nome não foi informado corretamente.");
      }

      //Instancia uma novo hobby.
      const hobby = new Hobby(id, nome);

      //Instancia a classe no banco de dados.
      const hobbyData = new HobbyData();
      const answer = await hobbyData.insertHobby(hobby);

      res.status(201).send({
        id: id,
        nome: nome,
      });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //BUSCANDO TODAS AS TURMAS
  //   async getAllClasses(req: Request, res: Response) {
  //     try {
  //       //Instancia a classe de banco de dados.
  //       const classData = new ClassData();
  //       const answer = await classData.selectAllClass();

  //       if (answer.length == 0) {
  //         res.status(200).send({ message: "Nenhuma turma encontrada." });
  //       } else {
  //         res.status(200).send({ classes: answer });
  //       }

  //       res.status(200).send();
  //     } catch (error: any) {
  //       res.status(res.statusCode).send(error.message);
  //     }
  //   }

  //BUSCANDO TODAS AS TURMAS ATIVAS
  //   async getAllActiveClasses(req: Request, res: Response) {
  //     try {
  //       //Instancia a classe de banco de dados.
  //       const classData = new ClassData();
  //       const answer = await classData.selectAllActiveClasses();

  //       if (answer.length == 0) {
  //         res.status(200).send({ message: "Nenhuma turma encontrada." });
  //       } else {
  //         res.status(200).send({ classes: answer });
  //       }

  //       res.status(200).send();
  //     } catch (error: any) {
  //       res.status(res.statusCode).send(error.message);
  //     }
  //   }
}

export default HobbyController;
