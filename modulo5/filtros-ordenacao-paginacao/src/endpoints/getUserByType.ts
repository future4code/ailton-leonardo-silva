import { Request, Response } from "express";
import selectUserByType from "../data/selectUserByType";

const getUserByType = async (req: Request, res: Response): Promise<void> => {
  try {
    
    let { type } = req.params;

    const user = await selectUserByType(type);

    if (!user.length) {
      res.statusCode = 404;
      throw new Error("Nenhum usuário do tipo fornecido foi encontrado.");
    }

    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default getUserByType;