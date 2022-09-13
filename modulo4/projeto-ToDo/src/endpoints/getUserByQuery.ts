import { Request, Response } from "express";
import selectUserByQuery from "../data/selectUserByQuery";

const getUserByQuery = async (req: Request, res: Response) => {
  try {
    const search = req.query.search as string;

    res.send(await selectUserByQuery(search));
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
};

export default getUserByQuery;
