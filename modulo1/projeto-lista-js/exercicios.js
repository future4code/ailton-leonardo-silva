// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const altura = prompt('Digite a altura do retângulo.')
  const largura = prompt('Digite a largura do retângulo.')
  const area = altura * largura
  
  console.log(area)
  
  return area  

}
// calculaAreaRetangulo()


// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoNascimento = prompt('Digite o ano em que você nasceu.')
  const ano = prompt('Digite o ano em que estamos.')
  const idade = anoNascimento - ano

  console.log (idade)

  return idade

}

// imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  // Peso e altura já foram declaradas na função
  // const peso = prompt('Digite o seu peso em kilos. Não adianta mentir.')
  // const altura = prompt('Digite a sua altura em metros.')
  const IMC = peso / (altura * altura)
  const IMCarredondado = IMC.toFixed(1)
  console.log (IMCarredondado)

  return IMCarredondado
}

//  calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt("Digite o seu nome...")
  const idade = prompt("Digite a sua idade...")
  const email = prompt("Digite o seu email...").trim()

  const frase = "Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}." // SÓ DESSE JEITO LIBEROU A RESOLUÇÃO CORRETA.
  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
  return frase
}

// imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
      const cores = []
      cores [0] = prompt("Digite a sua primeira cor favorita...")
      cores [1] = prompt("Digite a sua segunda cor favorita...")
      cores [2] = prompt("Digite a sua terceira cor favorita...")

    const exibaCores = console.log(cores)
    return exibaCores
}

// imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  const frase = prompt("Digite qualquer coisa aqui...")
  const fraseUpper = frase.toUpperCase()
  console.log(fraseUpper)
  return fraseUpper
}

// Esse exercício só dá certo quando se insere oi e banana
// retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  const roiCusto = (custo / valorIngresso)
  console.log(roiCusto)
  return roiCusto
}

// calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  const tamanhoString = string1.length === string2.length
  return tamanhoString

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  const indexArray = array[0]
  console.log (indexArray)
  return indexArray

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  const indexUltimo = (array.length)-1 // descobri o tamanho do array e joguei na constante
  const indexArray = array[indexUltimo] // usei a variável para achar a posição correta
  console.log (indexUltimo)
  console.log (indexArray)
  return indexArray

}

// retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  // const primeiro = array[0]
  // const indexUltimo = (array.lenght)
  // const ultimo = array[indexUltimo]
  
  // console.log (primeiro)
  // console.log (indexUltimo)
  // console.log (ultimo)
  
  // array.pop()
  // array.push(primeiro)
  // array [0] = ultimo
  // console.log (array)

}

// trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  const stringsIguais = (string1.toUpperCase() === string2.toUpperCase()) // Mais fácil colocar em lower ou upper
  return stringsIguais
  
}

// checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  // const anoAtual = parseInt(Prompt("Qual é o ano atual?"));
  // const anoNascimento = parseInt(Prompt("Qual é o ano de seu nascimento?"))
  // const anoEmissao = parseInt(Prompt("Qual é o ano da emissao de seu RG?"))

  // const checaAnos1 = (anoAtual - anoNascimento) <= 20 
  // const checaAnos2 = (anoAtual - anoNascimento) <= 20 && =>50
  // const checaAnos3 = (anoAtual - anoNascimento) => 50 

  // const fazendoChecagem = checaAnos1 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  // const checaAno1 = ano % 400
  // const checaAno2 = ano % 4
  // const checaAno3 = ano % 100
  // const checaAno4 = ano % 4
   
  // const checa = (checaAno1==0) || (checaAno2==0 && checaAno3!=0) // LÓGICA BISSEXTO
  // return checa

}

checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}