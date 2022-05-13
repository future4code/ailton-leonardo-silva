// // PRIMEIRO EXERCÍCIO

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[0]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) // f. 9

// // SEGUNDO EXERCÍCIO

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // A frase digitada em MAIÚSCULAS e todos os A trocados por I e no final o tamanho da frase.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// // PRIMEIRO EXERCÍCIO
// let nomeUsuario, emailDoUsuario

// nomeUsuario = prompt ("Digite o seu nome...");
// emailDoUsuario = prompt ("Digite o seu email...");

// console.log ("O e-mail", emailDoUsuario.trim(), "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeUsuario + "!")

// // SEGUNDO EXERCÍCIO
// let arrayComidas
// let usuarioComidas
// arrayComidas = ["Gnocci", "Churrasco", "Farofa", "Pizza", "Banana"]

// console.log(arrayComidas)

// console.log ("Essas são as minhas comidas preferidas: ")
// console.log(arrayComidas[0])
// console.log(arrayComidas[1])
// console.log(arrayComidas[2])
// console.log(arrayComidas[3])
// console.log(arrayComidas[4])

// usuarioComidas = prompt ("Qual é a sua comida favorita???") 

// arrayComidas[1] = usuarioComidas // Troca churraso pela comida inserida pelo usuário

// console.log(arrayComidas)

// // TERCEIRO EXERCÍCIO

let arrayTarefas
let listaDeTarefas
let tarefasUsuario
let indiceTarefas

arrayTarefas = []

tarefasUsuario = prompt ("Digite uma tarefa que você precisa fazer.")
arrayTarefas [0] = tarefasUsuario

tarefasUsuario = prompt ("Digite uma segunda tarefa que você precisa fazer.")
arrayTarefas [1] = tarefasUsuario

tarefasUsuario = prompt ("Digite uma terceira tarefa que você precisa fazer.")
arrayTarefas [2] = tarefasUsuario

listaDeTarefas = arrayTarefas
console.log (listaDeTarefas)

indiceTarefas = parseInt(prompt ("Digite o número da tarefa que você já realizou, 0, 1 ou 2"))
arrayTarefas.splice(indiceTarefas,1) // Aqui remove a tarefa que o usuário já realizou.

listaDeTarefas = arrayTarefas
console.log (listaDeTarefas)

// DESAFIOS DO DIA 1

let fraseDoUsuario
let arrayFrase

fraseDoUsuario = prompt("Digite uma frase...")
arrayFrase = fraseDoUsuario.split(" ") //SEPARAMOS AS PALAVRAS E INSERIMOS NA ARRAY

console.log (arrayFrase)

// DESAFIOS DO DIA 2

let arrayFrutas

arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

indexAbacaxi = arrayFrutas.indexOf ("Abacaxi")

console.log (indexAbacaxi, arrayFrutas.length)
