import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { NewUser } from "../types";
import { v4 as uuidv4 } from "uuid";

const createUser = async (req: Request, res: Response) => {
  try {
    //Gerando um número de Id aleatório.
    let id = uuidv4();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 400;
      throw new Error("Preencha todos os campos.");
    }

    const newUser: NewUser = {
      id,
      name,
      email,
      password,
    };

    await insertUser(newUser);
    res.status(201).send({"id": id , "name": name , "email": email, "password": password});
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default createUser;
