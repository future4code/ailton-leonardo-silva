import { Request, Response } from "express";
import insertClass from "../data/insertClass";
import { v4 as uuidv4 } from "uuid";
import { NewClass } from "../types/TypeClass";

const createClass = async (req: Request, res: Response) => {
  try {
    //Gerando um número de Id aleatório.
    let id = uuidv4();
    const modulo = 0;

    const { nome, data_inicio, data_termino } = req.body;

    //Recebendo a Data no Formato Brasileiro e mudando para o Americano.
    //Refatorei o código para não usar o formato date e mudei para string
    let data_brasileira = data_inicio;
    let data_americana = data_brasileira.split("/").reverse().join("-");
    let novaData_Inicial = data_americana
    
    data_brasileira = data_termino
    data_americana = data_brasileira.split("/").reverse().join("-")
    let novaData_Termino = data_americana

    if (!nome || !data_inicio || !data_termino) {
      res.statusCode = 400;
      throw new Error("Preencha todos os campos.");
    }

    const newClass: NewClass = {
      id,
      nome,
      data_inicio: novaData_Inicial,
      data_termino: novaData_Termino,
      modulo
    };

    await insertClass(newClass);
    res.status(201).send({"id": id , "nome": nome , "data_inicio": data_inicio, "data_termino": data_termino, "modulo": modulo});
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default createClass;