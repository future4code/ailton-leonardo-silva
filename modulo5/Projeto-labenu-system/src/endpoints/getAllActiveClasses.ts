import { Request, Response } from "express";
import selectAllActiveClasses from "../data/selectAllActiveClasses";

const getAllActiveClasses = async (req: Request, res: Response) => {
  try {

    const classes = await selectAllActiveClasses();

    
    
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

export default getAllActiveClasses;
