import { connection } from "./BaseDataBase";

const insertStudent = async (newStudent: any): Promise<any> => {
  await connection
    .insert(newStudent)
    .into("Estudante");
};

export default insertStudent;