import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserDeleteDTO, IUserGetTokenDTO, IUserInputDTO, IUserInputToEditDTO, IUserLoginDTO } from "../models/User";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: IUserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: IUserLoginDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
            const input: IUserGetTokenDTO = {
                token: req.headers.authorization,
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: Number(req.query.limit),
                page: Number(req.query.page)
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.getUsers(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) => {
        try {
            const input: IUserDeleteDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    public editUser = async (req: Request, res: Response) => {
        try {
            const input: IUserInputToEditDTO = {
                token: req.headers.authorization,
                idToEdit: req.params.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.editUser(input)

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}