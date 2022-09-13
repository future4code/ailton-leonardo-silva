import { Request, Response } from "express";
import selectTask5 from "../data/selectTask5";

const getUserById5 = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
  
      console.log(await selectTask5(id));
  
      res.send(await selectTask5(id));
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Unexpected error");
    }
  };

export default getUserById5