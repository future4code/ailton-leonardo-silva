//Trabalho de variáveis
//PRIMEIRA PARTE EXERCÍCIO

let pergunta1
let pergunta2
let pergunta3

pergunta1 = prompt ("Você gostou da aula de hoje?")
pergunta2 = prompt ("A aula foi difícil?")
pergunta3 = prompt ("Variáveis são um excelente tópico?")

//Exibindo os resultados

console.log ("Você gostou da aula de hoje?", pergunta1);
console.log ("A aula foi difícil?", pergunta2);
console.log ("Variáveis são um excelente tópico?", pergunta3);

//SEGUNDA PARTE EXERCÍCIO
let a = 10;
let b = 25;
let abTroca;
// Aqui faremos uma lógica para trocar os valores
abTroca = a
a = b
b = abTroca

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO
let numero1
let numero2

numero1 = prompt ("Digite algum número...");
numero2 = prompt ("Agora digite outro número...");

//formatando a string para um valor numeral

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

console.log("O primeiro número somado ao segundo número resulta em:", (numero1) + (numero2));
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numero1 * numero2);
