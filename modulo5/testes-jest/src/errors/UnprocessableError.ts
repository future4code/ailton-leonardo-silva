import { BaseError } from "./BaseError";

export class UnprocessableError extends BaseError {
    constructor(
        message: string = "Parâmetros válidos, porém com erros de semântica" 
    ) {
        super(422, message)
    }
}

/*
    Esse erro serve para lidar com requisições estruturalmente válidas,
    porém bloqueadas por algum outro motivo
*/

// Exemplos:
// pessoa tentando se cadastrar com o nome: "Admin"
// conteúdo do post com palavras proibidas (palavrões)
// etc