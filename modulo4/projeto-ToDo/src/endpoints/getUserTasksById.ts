import { Request, Response } from "express";
import selectUserTasksbyId from "../data/selectUserTasksById";

const getUserTasksById = async (req: Request, res: Response) => {
  try {
    const id: any = req.query.creator_user_id as string;
    const result = await selectUserTasksbyId(id);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
export default getUserTasksById;
