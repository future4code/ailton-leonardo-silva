class UserClasse{
    private id: string
    private nome: string
    private rua: string
    private bairro: string

    constructor(id: string, nome: string, rua: string, bairro: string) {
        this.id = id
        this.nome = nome
        this.rua = rua
        this.bairro = bairro
    }
}

class UserClasseAbreviado{
   
    constructor(
        private id:string,
        private nome: string,
        private rua: string,
        private bairro: string
    ) {  
    }
}

class UserClasseFilhaCPF extends UserClasse{
    private cpf:string

    constructor(id: string, nome: string, rua: string, bairro: string,cpf:string){
        super(id,nome,rua,bairro)
        this.cpf = cpf
    }
}

class UserClasseFilhaCnpj extends UserClasse{
    private cnpj:string

    constructor(id: string, nome: string, rua: string, bairro: string,cnpj:string){
        super(id,nome,rua,bairro)
        this.cnpj = cnpj
    }
}

// Tipagem com a mae , assim todos os filhos podem passar nessa funcao
function cadastrarUsuarioNoBD(usuario:UserClasse){
    // await connection.raw
}

const novaPessoa = new UserClasseFilhaCPF("001","fulano","rua","bairro","123.421.546-86")
const novaPessoaJuridica = new UserClasseFilhaCnpj("001","fulano","rua","bairro","123.6412/0985")

cadastrarUsuarioNoBD(novaPessoa)
cadastrarUsuarioNoBD(novaPessoaJuridica)