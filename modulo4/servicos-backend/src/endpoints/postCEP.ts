



import { Request, Response } from "express";
import fetchCEP from "../services/fetchCEP";
import insertCEP from "../data/insertCEP";
// import selectAllUsers from "../data/selectAllUsers";

const getCEP = async (req: Request, res: Response): Promise<void> => {
  try {
    let CEP = req.params.CEP;
    
    if (!CEP) {
      CEP = "";
    }

    const searchCEP = await fetchCEP(CEP);

    if (!CEP.length) {
      res.statusCode = 404;
      throw new Error("Nenhum CEP foi informado.");
    }

    // inserir no banco as informacoes
    await insertCEP(searchCEP)
    res.status(201).send("CEP cadastrado com sucesso no Banco de Dados!")
    
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default getCEP;

