import { Request, Response } from "express";
import selectStudentByName from "../data/selectStudentByName";

const getStudentByName = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;

    res.send(await selectStudentByName(search));
    
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Erro inesperado.");
  }
};

export default getStudentByName;