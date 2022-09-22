function personagem(nome: string, filme: string, id: number) {
    const nomePersonagem = nome
    const filmePersonagem = filme
    const idPersonagem = id
    // await conneciton.raw(personagem)
}
// personagem("keanu reveus","constantine",10)

export class PersonagemDeFilme {
    // coloco meus atributos(informacoes que a minha classe precisa ter para ser construida)
    private nome: string;
    private filme: string;
    private id: number;
    private salario: number;

    // a primeira funcao chamada da classe , onde eu passo os parametros para constuir
    constructor(nome: string, filme: string, id: number, salario: number) {
        this.nome = nome;
        this.filme = filme;
        this.id = id
        this.salario = salario
    }

    // metodos de acesso.(get -> busca a informação do atributo)
    public getSalario() {
        return this.salario
    }

    // metodos de acesso.(get -> busca a informação do atributo)
    public getNome(){
        return this.nome
    }

    // metodos de acesso(set -> Altera a informação do atributo)
    public aumento(novoSalario: number) {
        this.salario += novoSalario;
    }


    // funcao do personagem
    public atuar() {
        console.log(`o personagem ${this.nome} esta atuando no filme ${this.filme}`)
    }

}

// chamou a classe (Quando chama a classe , você ja chama a funcao de constructor, que constroi a classe e coloca as suas informaçoes)
const pessoa1 = new PersonagemDeFilme("frodo , o bolseiro", "hobbit", 10, 400000)
pessoa1.atuar()



class Filmes{
    private id:string;
    private personagensFilme:PersonagemDeFilme[]

    constructor(id:string,personagensFilme:PersonagemDeFilme[]){
        this.id = id
        this.personagensFilme = personagensFilme
    }
}

const personagem1 = new PersonagemDeFilme("frodo , o bolseiro", "hobbit", 10, 400000)
const personagem2 = new PersonagemDeFilme("sam","hobbit",80,10)

const personagemDoFilmeHobbit:PersonagemDeFilme[] = [personagem1,personagem2]

const novoFilme = new Filmes("001",personagemDoFilmeHobbit)


