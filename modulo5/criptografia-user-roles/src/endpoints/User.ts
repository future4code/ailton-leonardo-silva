import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator, { typeUser } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {

            const { name, nickname, email, password, role } = req.body

            if (!name || !nickname || !email || !password || !role) {
                throw new MissingFields()
            }

            if(role.toUpperCase() !== typeUser.ADMIN && role.toUpperCase() !== typeUser.NORMAL){
                throw new Error("Tipo de usuario invalido")
            }
            
            const userDataBase = new UserDatabase()

            const emailAlreadyExist = await userDataBase.getUserByEmail(email)
           
            // undefined , null , 0 , true
            if (emailAlreadyExist) {
                throw new EmailExist()
            }

            // gerar id pelo uuid
            const id = new GenerateId().createId();

            // gerar o hash da senha
            const hashPassword = await new HashManager().hashDaSenha(password)

            const user = new User(id, name, nickname, email, hashPassword, role)


            const response = await userDataBase.createUser(user)

            // gerar token do usuario
            const token = new Authenticator().generateToken({id,role})

            res.status(201).send({ message: response, token })

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

            const emailExist = await userData.getUserByEmail(email)

            if (!emailExist) {
                throw new InvalidCredencial();
            }

            const correctPassword = await new HashManager().compare(senha, emailExist.getPassword())

            if (!correctPassword) {
                throw new InvalidCredencial();
            }

            // O Erro era porque o User do model estava com uma tipagem de string
            // e a tipagem que a gente criou foi de enum 
            // entao a gente criou a pessoa com o role : enum (veja a mudança no USER model)
            const token = new Authenticator().generateToken({id:emailExist.getId(),role:emailExist.getRole()})

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

            const typePerson = new Authenticator().verifyToken(token)
 
            if(typePerson.role.toUpperCase() !== typeUser.ADMIN){
                throw new Error(`SOMENTE PESSOAS ADMINISTRADORAS PODEM ACESSAR ESSE ENDPOINT`)
            }
                   
            const userData = new UserDatabase()

            await userData.edit(typePerson.id, nickname)

            res.status(200).send("Atualizado com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint



