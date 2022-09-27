import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      new UserDatabase().edit(req.params.id, {name, nickname})

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}