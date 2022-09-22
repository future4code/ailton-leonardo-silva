class Pessoa{
    private id:string = Date.now().toString()
    private nome:string
    public static quantidadePesssoa:number = 0

    constructor(nome:string){
        this.nome = nome
        Pessoa.quantidadePesssoa++
    }

    getquantidade(){
        return Pessoa.quantidadePesssoa
    }
}

const pesssoa =  new Pessoa("fulano")
const pesssoa2 =  new Pessoa("Ciclano")
const pesssoa3 =  new Pessoa("Beltrano")

console.log(pesssoa3.getquantidade())