import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";


const getAllUsers = async (req: Request, res: Response) => {

    try {
        res.send(await selectAllUsers());
      } catch (error: any) {
        console.log(error.message);
        res.status(500).send("Unexpected error");
      }
    }

export default getAllUsers;
