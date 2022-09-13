import { connection } from "./baseDatabase"

//GET ALL USERS
//Função para retornar todos os usuários do DB
const selectAllUsers = async (): Promise<any> => {
    const result = await connection.raw(`
          SELECT * FROM TodoListUser
        `);
    return result[0];
  };

  export default selectAllUsers;