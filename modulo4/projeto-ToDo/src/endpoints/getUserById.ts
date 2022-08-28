import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

const getUserbyId = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await selectUserById(id));

    res.send(await selectUserById(id));
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
};

export default getUserbyId;
