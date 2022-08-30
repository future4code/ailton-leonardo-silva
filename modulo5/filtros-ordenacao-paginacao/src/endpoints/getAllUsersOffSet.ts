import { Request, Response } from "express";
import selectAllUsersOffSet from "../data/selectAllUsersOffSet";

//Exercícios 3 e 4

const getAllUsersOffSet = async (req: Request, res: Response): Promise<void> => {
    try {
      let name = req.query.name as string;
      let order = req.query.order as string;

      let pagina:number = Number(req.query.pagina)
      
      //Se o usuário não passar a página seta ela para a página 1
      if (!pagina) {
        pagina = 1
      }
      const usuariosPorPagina = 5

      // UsuariosPorPagina são limitados pelo BackEnd (5 usuários por página)
      // Feito isso , a gente usa na fórmula o total de produtos vezes a pagina - 1
      // o -1 é usado para limitar os produtos entre os multiplos do produtoPorPagina
      // produtosPorPagina = 5 , offset => 0 , 5, 10 , 15 , 20 , 25 ,etc...
      const offset = usuariosPorPagina * (Number(pagina) - 1)

      // verifica se vem undefined , se vier , a variavel recebe uma string vazia e retorna todas as receitas
      if (!name) {
        name = "";
      }
  
      // verifica se vem undefined e por padrão usamos o ASC (o exercício 4 pede DESC)
      if (!order) {
        order = "asc"; // order = "desc" - resolução exercício 4
      }
      const user = await selectAllUsersOffSet(name, order,  usuariosPorPagina , offset);
  
      if (!user.length) {
        res.statusCode = 404;
        throw new Error("Nenhum usuário encontrado.");
      }
  
      res.status(200).send(user);
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
  };
  
  export default getAllUsersOffSet;
  