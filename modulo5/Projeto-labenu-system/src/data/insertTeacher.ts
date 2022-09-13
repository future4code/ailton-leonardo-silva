import { connection } from "./BaseDataBase";

const insertTeacher = async (newTeacher: any): Promise<any> => {
  await connection
    .insert(newTeacher)
    .into("Docente");
};

export default insertTeacher;