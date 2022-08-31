import { Request, Response } from "express";
import fetchCEP from "../services/fetchCEP";
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

    res.status(200).send({"Logradouro":searchCEP.logradouro, "Bairro": searchCEP.bairro, "Cidade": searchCEP.localidade, "Estado": searchCEP.uf});
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default getCEP;
