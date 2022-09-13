import { Request, Response } from "express"
import selectClassById from "../data/selectClassById"
import selectStudentById from "../data/selectStudentById"
import updateStudentOtherClass from "../data/updateStudentOtherClass"

const putStudentOtherClass = async (req: Request, res: Response) => {

    try {

        const id = req.params.id as string
        const turma_id = req.body.turma_id

        if (!turma_id) {
            res.statusCode = 400
            throw new Error("Informe os dados da nova turma.")
        }

        //Fiz essas 2 seleções para melhorar a experiência do usuário.
        const estudante = await selectStudentById(id)
        const turma = await selectClassById(turma_id)
        
        await updateStudentOtherClass(id, turma_id)


        res.status(200).send(`O(A) aluno(a) ${estudante[0].nome} fez a troca para a turma ${turma[0].nome}.`)
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}

export default putStudentOtherClass