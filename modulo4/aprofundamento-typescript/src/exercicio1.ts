// a) Crie uma variável minhaString do tipo string e atribua um valor a ela.
// Tente atribuir um número a esta variável. O que acontece?

let str:string = "Aula de TypeScript"

// str = 1 // Aparece a mensagem de erro, tipo number não pode ser atribuido a uma string.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings?
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero:number|string = 10 // desse jeito aceita números ou strings
meuNumero = "10"

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
//`idade`, que é um número;
//`corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris.
// Utilize um enum para isso.

enum coresArcoiris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
    }

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
const pessoa1:Pessoa = {
    nome: "Leonardo",
    idade: 45,
    corFavorita: coresArcoiris.AZUL
}
const pessoa2:Pessoa = {
    nome: "Raquel",
    idade: 39,
    corFavorita: coresArcoiris.VERMELHO
}
const pessoa3:Pessoa = {
    nome: "Laura",
    idade: 9,
    corFavorita: coresArcoiris.VIOLETA
}

const arrayPessoas: Array<object> = []
arrayPessoas.push(pessoa1)
arrayPessoas.push(pessoa2)
arrayPessoas.push(pessoa3)

console.table(arrayPessoas)


    