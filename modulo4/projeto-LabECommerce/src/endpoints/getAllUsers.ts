import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";
import selectPurchaseByUserId from "../data/selectPurchaseByUserId";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await selectAllUsers();

    const mapUsers: any = users.map((result) => {
      return result.id;
    });

    let result: any = [];
    let purchase: any;
    let id: string;

    for (let i = 0; i < mapUsers.length; i++) {
      purchase = await selectPurchaseByUserId(mapUsers[i]);

      if (purchase.length == 0) {
        result.push(users[i]);
      } else {
        result.push(users[i], {purchases: purchase});
      }
    }

    res.status(200).send({ Users: result });
  } catch (error: any) {
    res.status(res.statusCode).send(error.message);
  }
};

export default getAllUsers;
