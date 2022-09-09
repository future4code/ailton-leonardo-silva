import { Request, Response } from "express"
import selectClassById from "../data/selectClassById"
import selectTeacherById from "../data/selectTeacherById"
import updateTeacherOtherClass from "../data/updateTeacherOtherClass"

const putTeacherOtherClass = async (req: Request, res: Response) => {

    try {

        const id = req.params.id as string
        const turma_id = req.body.turma_id

        if (!turma_id) {
            res.statusCode = 400
            throw new Error("Informe os dados da nova turma.")
        }

        //Fiz essas 2 seleções para melhorar a experiência do usuário.
        const docente = await selectTeacherById(id)
        const turma = await selectClassById(turma_id)

        await updateTeacherOtherClass(id, turma_id)

        res.status(200).send(`A turma do(a) docente ${docente[0].nome} foi alterada com sucesso. Nova turma ${turma[0].nome}.`)
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default putTeacherOtherClass