class Usuario1{
    private id:string
    private nome:string

    constructor(id:string,nome:string){
        this.id = id
        this.nome = nome
    }

    // somente a mae e a filha podem acessar
    protected cadastrarEndereco(){
        console.log("estou cadastrando endereco")
    }
}

class UsuarioFisico1 extends Usuario1{
    private cpf:string

    constructor(id:string,nome:string,cpf:string){
        super(id,nome)
        this.cpf = cpf
    }

    cadastarPessoa(){
        this.cadastrarEndereco()
    }
}
const usuarioFisico =  new UsuarioFisico1("001","fulano","321.421.546-94")
usuarioFisico.cadastarPessoa()