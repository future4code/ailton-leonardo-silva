class Endereco{
    private rua:string
    private numero:number
    private bairro:string

    constructor(rua:string,numero:number,bairro:string){
        this.rua = rua
        this.numero = numero
        this.bairro = bairro
    }
}

class Usuario{
    private id:string
    private nome:string
    private endereco:Endereco

    constructor(id:string,nome:string ,endereco:Endereco){
        console.log("Construtor da classe mae")
        this.id = id
        this.nome = nome
        this.endereco = endereco
    }
}


class UsuarioFisico extends Usuario{
    private cpf:string

    constructor(id:string,nome:string,endereco:Endereco,cpf:string){
        super(id,nome,endereco)
        this.cpf = cpf
        console.log("Construtor da classe filha")
    }
}

class UsuarioJuridico extends Usuario{
    private cnpj:string

    constructor(id:string,nome:string,endereco:Endereco,cnpj:string){
       super(id,nome,endereco)
        this.cnpj = cnpj
    }
}

const enderecoFisico =  new Endereco("rua do bobo",0,"nenhum")
const usuario = new UsuarioFisico("001","fulano",enderecoFisico,"123.352.546-86")

const enderecoJuridico =  new Endereco("rua do bobo",0,"nenhum")
 const usuarioJuridico = new UsuarioJuridico("002","EmpresaDoPaulo",enderecoJuridico,"213240/75")
