import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";

const getUserByName = async (req: Request, res: Response): Promise<void> => {
  try {
    let name = req.query.name as string;
    
    const user = await selectUserByName(name);

    if (!user.length) {
      res.statusCode = 404;
      throw new Error("Nenhum usuário encontrado.");
    }

    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default getUserByName;
