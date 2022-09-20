import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { USER_ROLES } from "../models/User";

export class UserController {
  //*********** MÉTODO - CRIAR UM USUÁRIO   *****************
  async createUser(req: Request, res: Response) {
    try {
      const { name , email, password } = req.body
      
      const role: USER_ROLES = req.body.role;

      const userBusiness = new UserBusiness();
      const answer = await userBusiness.createUser(name, email, password, role);

      res.status(201).send({ message: answer });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}
