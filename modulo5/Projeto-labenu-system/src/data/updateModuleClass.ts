import { connection } from "./BaseDataBase";

const updateClass = async (
  id: string,
  modulo: number,
) => {
  await connection("Turma")
    .update({
      modulo
    })
    .where({
      id: id,
    });
};

export default updateClass;