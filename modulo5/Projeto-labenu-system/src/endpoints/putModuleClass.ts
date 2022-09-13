import { Request, Response } from "express"
import updateModuleClass from "../data/updateModuleClass"

const putModuleClass = async (req: Request, res: Response) => {

    try {

        const id = req.params.id as string
        const modulo = req.body.modulo

        if (!modulo) {
            res.statusCode = 400
            throw new Error("Informe o novo módulo da turma.")
        }

        await updateModuleClass(id, modulo)

        res.status(200).send(`O módulo da turma foi alterado com sucesso para o número ${modulo}`)
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default putModuleClass