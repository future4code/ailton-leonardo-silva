import { connection } from "./BaseDataBase";

const updateStudentOtherClass = async (
  id: string,
  turma_id: string,
) => {
  await connection("Estudante")
    .update({
      turma_id
    })
    .where({
      id: id,
    });
};

export default updateStudentOtherClass;