// EXERCÍCIOS INTERPRETAÇÃO 1

// console.log(filme.elenco[0]) // Matheus Nachtergaele 
// console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"

// EXERCÍCIOS INTERPRETAÇÃO 2

// console.log(cachorro) // Juca, 3, SRD
// console.log(gato) // Juba, 3, SRD
// console.log(tartaruga) // Jubo, 3, SRD

// Faz a clonagem, spreading.

// EXERCÍCIO INTERPRETAÇÃO 3

// console.log(minhaFuncao(pessoa, "backender")) // False
// console.log(minhaFuncao(pessoa, "altura")) // Undefined

// Altura não foi definido na função.

// EXERCÍCIOS ESCRITA DE CÓDIGO 1

// Objeto criado
// A)
// const pessoa = {
//     nome: "Raquel", 
//     apelidos: ["Ra", "Quel", "Mor"]
// }
 
//  function recebeNome(obj){

//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}.`)

// }
   
// recebeNome(pessoa)

// B)

// const pessoa = {
//     nome: "Raquel", 
//     apelidos: ["Ra", "Quel", "Mor"]
// }
 
//  function recebeNome(obj){

//     const novoObj = {
//         ...obj,
//         apelidos: ['Linda', 'Sexy', 'Paixão'],
        
//     }

//     console.log(`Eu sou ${novoObj.nome}, mas pode me chamar de: ${novoObj.apelidos[0]}, ${novoObj.apelidos[1]} ou ${novoObj.apelidos[2]}.`)

// }
   
// recebeNome(pessoa)

// EXERCÍCIOS ESCRITA DE CÓDIGO 2

    // const pessoa = {

    //     nome: "Leonardo",
    //     idade: 45,
    //     profissao: "Estudante"

    // }

    //     function recebeNome(obj){

    //     array = [pessoa.nome, pessoa2.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]   
        
    //     console.log(`${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissao}, ${pessoa.profissao.length}.`)
    //     console.log(array)   

    // }

    // recebeNome(pessoa);

// // EXERCÍCIOS ESCRITA DE CÓDIGO 3
// // DESAFIOS 3

//     let carrinho = []
//     const fruta1 = {
//         nome: "Banana",
//         disp: true
//     }
//     const fruta2 = {
//         nome: "Limão",
//         disp: true
//     }
//     const fruta3 = {
//         nome: "Açaí",
//         disp: true
//     }

//     function arrayCarrinho(obj1,obj2,obj3){
      
//         carrinho.push(fruta1,fruta2,fruta3)
//         console.log (carrinho)

//         function estoque(obj){

//             fruta3.disp = false // Fiz a troca do conteúdo

//         }
//         estoque(fruta3)
//     }

//     arrayCarrinho(fruta1,fruta2,fruta3)

// // DESAFIOS 1

    
//     function imprimeObjeto(obj1,obj2,obj3){
    
//         const pessoa = {
//             nome: prompt("Qual é o seu nome?"),
//             idade: prompt("Qual é a sua idade?"),
//             profissao: prompt("Qual é a sua profissão?")
//         }
    

//         console.log(pessoa.nome)
//         console.log(pessoa.idade)
//         console.log(pessoa.profissao)

        
//         console.log(pessoa)
//         console.log(pessoa).typeOf()
//     }

//     imprimeObjeto()

// // DESAFIOS 2 - OK

//     const filme1 = {
//         nome: "Homem Aranha Sem Volta Para Casa",
//         ano: 2021
//     }

//     const filme2 = {
//         nome: "Doutor Estranho 2",
//         ano: 2022
//     }

//     function filmesMarvel(obj1,obj2){

//     const checaAno1 = (filme1.ano<filme2.ano)
//     const checaAno2 = (filme2.ano<filme1.ano)
    

//     console.log("O primeiro filme foi lançado antes do segundo?", checaAno1)
//     console.log("O segundo filme foi lançado antes do primeiro?", checaAno2)

//     }

//     filmesMarvel(filme1,filme2)


    
