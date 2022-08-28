import { Request, Response } from "express";
import selectResponsibleTaskbyID from "../data/selectResponsibleTaskById";

const getResponsibleTaskbyID = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await selectResponsibleTaskbyID(id);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
export default getResponsibleTaskbyID;
