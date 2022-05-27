// AULA DIA 18 DE MAIO - LAÇOS
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1)

//   valor += i pesquisando valor = valor + i dando resultado 10

// EXERCÍCIO 2) 

// A) No console log irá mostrar todos os valores maiores que 18, começando no 19
// e terminando no 30
// B) Sim. Poderia usar um contador
// let maior = 0        
//     for (let i = 0; i < arr.length; i++)

// EXERCÍCIO 3) 4 linhas com asteriscos

// *
// **
// ***
// ****

// ----------------------------------------------------------------------------------------

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1)
    
    const numeroAnimais = Number(prompt("Quantos animais você tem?"))
    let animaisDigitados = []
    let animais = 0
        if (numeroAnimais != 0) { // Fiz um if para qualquer valor que não seja 0 
            while (animais !== numeroAnimais) {
                animais = animais + 1 // contador
                nomeAnimal = prompt("Digite o seu animal.")
                animaisDigitados.push(nomeAnimal) // Inserindo o nome do animal no array
            }
        } else {
            console.log("Você deveria adotar um animal.")
        }    
        
        console.log(animaisDigitados)        
        
// EXERCÍCIO 2)

// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A)
 
    // for (let numero of array) {
    //     console.log(numero)
    // }

// B)

    // for (let numero of array) {
    //     numero = (numero/10)
    //     console.log(numero)
    // }

// C)

    // let pares = []
    // for (let numero of array) {
    //     if (numero % 2 == 0) {
    //     pares.push(numero)   
    //     }
    //     else {}
    // }
    // console.log(pares)

// D)

    // let i = 0
    // for (let numero of array) {
    //     console.log(`O elemento do index ${i} é ${numero}`)
    //     i = i + 1
    // }

// E)

    // let maior = 0
    
    // for (let num of array) {
    //     if(num > maior) {
    //         maior = num
    //     }
    // }    
    // let menor = maior // Usando o maior como limite, caso houvesse só ele no array.

    // for (let num of array) {
    //     if(num < menor) {
    //         menor = num
    //     }
    // }
    // console.log(`O maior número é ${maior} e o menor é ${menor}`)

// DESAFIOS

// 1) 

    // const numeroDigitado = Number(prompt("Digite um número para e chame o seu amigo para adivinhar qual foi."))
    // let numeroTentativas = []
    // let i = 0
    // let numeroChutado = 0

    // while (numeroDigitado !== numeroChutado) {
    //             numeroChutado = Number(prompt("Tente adivinha digitando um número."))
    //             numeroTentativas.push(numeroChutado)
    //             i = i + 1
    //             if (numeroChutado > numeroDigitado) {
    //                 console.log(`O número chutado foi: ${numeroChutado}`)
    //                 console.log("Errrrrrrrou, é menor")
    //             } else {
    //                 console.log(`O número chutado foi: ${numeroChutado}`)
    //                 console.log("Errrrrrrrou, é maior")
    //             }
    //         }
    // console.log("ACERTOU!!!")
    // console.log(`O número de tentativas foi ${i}`)

// 2) 

    // const numeroDigitado = Number(prompt("Digite um número para e chame o seu amigo para adivinhar qual foi."))
    // let numeroTentativas = []
    // let i = 0
    // let numeroChutado = 0

    // while (numeroDigitado !== numeroChutado) {
    //             numeroChutado = Math.floor((Math.random() * 100) + 1) // floor retorna o inteiro mais próximo
    //             numeroTentativas.push(numeroChutado)
    //             i = i + 1
    //             if (numeroChutado > numeroDigitado) {
    //                 console.log(`O número chutado foi: ${numeroChutado}`)
    //                 console.log("Errrrrrrrou, é menor")
    //             } else {
    //                 console.log(`O número chutado foi: ${numeroChutado}`)
    //                 console.log("Errrrrrrrou, é maior")
    //             }
    //         }
    // console.log("ACERTOU!!!")
    // console.log(`O número de tentativas foi ${i}`)