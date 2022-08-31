import { Usuario } from "../types/usuario";
import { connection } from "./BaseDatabase";

const insertCEP = async (dadosCEP: Usuario) => {
    try {
        
        await connection().insert({
            CEP: dadosCEP.cep,
            logradouro: dadosCEP.logradouro,
            numero: dadosCEP.numero,
            complemento: dadosCEP.complemento,
            bairro: dadosCEP.bairro,
            cidade: dadosCEP.localidade,
            estado: dadosCEP.uf
        }).into("cadastroCEP")

    } catch (error:any) {
        console.log(error)
    }

}
export default insertCEP;