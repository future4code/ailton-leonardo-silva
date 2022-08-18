//Exercício 1 
//Letra A
// Atráves do process.argv

// Letra B
// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log("Olá," , nome,"! Você tem" , idade , "anos.")

// Letra C

const nome = process.argv[2]
const idade = Number(process.argv[3])

const cinza = '\u001b[37m'

if (nome && idade) { 
    console.log("Olá," , nome,"! Você tem" , idade , "anos. Em sete anos você terá " , (idade+7) ,".")
} else {
    console.log(cinza + "Eu esperava que você me passasse 2 parâmetros seu nome e sua idade.")
}

