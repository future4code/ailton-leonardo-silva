import { connection } from "./BaseDataBase";

const updateTeacherOtherClass = async (
  id: string,
  turma_id: string,
) => {
  await connection("Docente")
    .update({
      turma_id
    })
    .where({
      id: id,
    });
};

export default updateTeacherOtherClass;