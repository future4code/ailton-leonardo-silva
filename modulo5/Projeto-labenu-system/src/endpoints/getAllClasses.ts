import { Request, Response } from "express";
import selectAllClasses from "../data/selectAllClasses";

const getAllClasses = async (req: Request, res: Response) => {
  try {

    const classes = await selectAllClasses();

    
    
    if (classes.length == 0) {
      res.status(200).send({ message: "Nenhuma turma encontrada." });
    } else {
      res.status(200).send({ classes: classes });
    }
    

    res.status(200).send();
  } catch (error: any) {
    res.status(res.statusCode).send(error.message);
  }
};

export default getAllClasses;
