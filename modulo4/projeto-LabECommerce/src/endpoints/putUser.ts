import { Request, Response } from "express";
import updateUser from "../data/updateUser";
import { UpdateUser } from "../types";


const putUser = async (req: Request, res: Response) => {
  try {
    const id:string = req.params.id as string
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error("Preencha todos os campos.");
    }

    const setUser: UpdateUser = {
      id,
      name,
      email,
      password,
    };
    
    await updateUser(setUser);
    res.status(200).send({"id": id , "name": name , "email": email, "password": password});
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default putUser;
