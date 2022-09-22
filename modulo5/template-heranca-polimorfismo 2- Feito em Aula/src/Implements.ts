interface PessoaFisicaVindoDaAPi {
    nome: string
    idade: number
}

interface PessoaFisicaVindaDoBD extends PessoaFisicaVindoDaAPi {
    id: string
}

const pessoa: PessoaFisicaVindoDaAPi = {
    nome: "Fulano",
    idade: 19
}

const pessoaBD: PessoaFisicaVindaDoBD = {
    nome: "Fulano",
    idade: 19,
    id: "0923012"
}

// INTERFACE COM CLASSE

// extends , super ,static , interface , implements

interface ContratoUser {
    // atribuitos
    id: string
    nome: string
    rua: string
    bairro: string

    // metodos( funcoes )
    cadastarPessoa(): number
    login(): void
}

class bancoDeDadosMysql implements ContratoUser {

    public id: string
    public nome: string
    public rua: string
    public bairro: string

    constructor(id: string, nome: string, rua: string, bairro: string) {
        this.id = id
        this.nome = nome
        this.rua = rua
        this.bairro = bairro
    }
    cadastarPessoa(): number {
        throw new Error("Method not implemented.")
    }
    login(): void {
        throw new Error("Method not implemented.")
    }

}

class BancoDeDadosMongoDb implements ContratoUser {
    id: string
    nome: string
    rua: string
    bairro: string

    constructor(id: string, nome: string, rua: string, bairro: string) {
        this.id = id
        this.nome = nome
        this.rua = rua
        this.bairro = bairro
    }
    cadastarPessoa(): number {
        throw new Error("Method not implemented.")
    }
    login(): void {
        throw new Error("Method not implemented.")
    }

}