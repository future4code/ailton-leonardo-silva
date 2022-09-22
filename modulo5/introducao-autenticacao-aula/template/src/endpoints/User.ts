import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, nickname, email, password } = req.body

            if (!name || !nickname || !email || !password) {
                throw new MissingFields()
            }

            const userDataBase = new UserDatabase()

            const emailAlreadyExist = await userDataBase.getUserByEmail(email)

            // undefined , null , 0 , true
            if (emailAlreadyExist.length) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId();

            const user = new User(id, name, nickname, email, password)

            await userDataBase.createUser(user)

            const token = new Authenticator().generateToken(id)

            res.status(201).send({ message: "Usuario cadastrado com sucesso", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {

            const { email, senha } = req.body

            if (!email || !senha) {
                throw new MissingFields()
            }

            const userData = new UserDatabase()

            const senhaCorreta = await userData.getUserByPassword(senha)
            const EmailExist = await userData.getUserByEmail(email)

            if (!senhaCorreta.length && !EmailExist.length) {
                throw new InvalidCredencial();
            }

            const token = new Authenticator().generateToken(senhaCorreta[0].id)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async editUser(req: Request, res: Response) {
        try {
            // const token = req.headers.authorization as string
            const token = req.headers.authorization!
            const { nickname } = req.body

            const id = new Authenticator().verifyToken(token)

            const userData = new UserDatabase()

            await userData.edit(id,nickname)

            res.status(200).send("Atualizado com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint



