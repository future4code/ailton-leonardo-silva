import { connection } from "./BaseDataBase";

const insertClass = async (newClass: any): Promise<any> => {
  await connection
    .insert(newClass)
    .into("Turma");
};

export default insertClass;
