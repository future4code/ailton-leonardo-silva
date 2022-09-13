import { Request, Response } from "express";
import selectAllTeachers from "../data/selectAllTeachers";

const getAllTeachers = async (req: Request, res: Response) => {
  try {

    const docente = await selectAllTeachers();

    
    
    if (docente.length == 0) {
      res.status(200).send({ message: "Nenhum docente encontrado." });
    } else {
      res.status(200).send({ docente: docente });
    }
    

    res.status(200).send();
  } catch (error: any) {
    res.status(res.statusCode).send(error.message);
  }
};

export default getAllTeachers;
