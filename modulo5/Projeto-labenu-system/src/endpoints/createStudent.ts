import { Request, Response } from "express";
import insertStudent from "../data/insertStudent";
import { v4 as uuidv4 } from "uuid";
import { NewStudent } from "../types/TypeStudent";

const createStudent = async (req: Request, res: Response) => {
  try {
    //Gerando um número de Id aleatório.
    let id = uuidv4();

    const { nome, email, data_nascimento, password, turma_id } = req.body;

    //Recebendo a Data no Formato Brasileiro e mudando para o Americano.
    // let data_brasileira = data_nascimento;
    let data_americana = data_nascimento.split("/").reverse().join("-");

    // if (!nome || !email || !password || turma_id) {
    //   res.statusCode = 400;
    //   throw new Error("Preencha todos os campos.");
    // }
    
    if (!nome) {
      res.statusCode = 400;
      throw new Error("O campo nome deve ser preenchido.");
    }

    const newStudent: NewStudent = {
      id,
      nome,
      email,
      data_nascimento: data_americana,
      password,
      turma_id,
    };

    await insertStudent(newStudent);
    res
      .status(201)
      .send({
        id: id,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        password: password,
        turma_id: turma_id,
      });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default createStudent;
