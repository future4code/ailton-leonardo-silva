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

  const primeiraPosicao = array[0] // Primeira posição do array e valor.  
  const tamanhoArray = (array.length)-1 // Pegando o tamanho do array.
  const ultimaPosicao = array[tamanhoArray] // Guardando o conteudo da ultima posicao do array
  
  console.log(primeiraPosicao)
  console.log(ultimaPosicao)
  console.log(array)

  array[0] = ultimaPosicao
  array[tamanhoArray] = primeiraPosicao
  console.log(array)

  return array

// TRAVEI NESSE EXERCÍCIO PORQUE TINHA APAGADO O COLCHETE DO FINAL DA FUNÇÃO PQP
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
  
  const anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("qual o ano de nascimento?")
  const anoEmissao = prompt("Qual o ano de emissão do RG?")

  // SÓ FUNCIONOU O VERDINHO DEPOIS QUE COLOQUEI OS PROMPTS!!!

  const idade = (anoAtual - anoNascimento)
  const idadeRenovaRG = (anoAtual - anoEmissao)

  const renovaCarteira = (idade <= 20 && idadeRenovaRG >= 5) || (idade <= 50 && idadeRenovaRG >= 10) || (idade > 50 && idadeRenovaRG >= 15)
  console.log(renovaCarteira)
  
  return renovaCarteira
}

checaRenovacaoRG() 

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
  // ano % 400 = 0 e ano % 4 = 0, mas não pode ser ano%100!=0
  // Esquentando a cuca, mas deu certo.

  const checa = (ano%400==0) || (ano%4==0 && ano%100!==0) // LÓGICA BISSEXTO
  console.log (checa)
  return checa

}

// checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  const idade = prompt("Tem mais de 18?");
  const ensino = prompt("Você possui ensino médio completo?")
  const disp = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const idadeChecada = idade.toLowerCase().includes("sim")
  const ensinoChecado = ensino.toLowerCase().includes("sim")
  const dispChecado = disp.toLowerCase().includes("sim")
  
  // console.log(idadeChecada)
  // console.log(ensinoChecado)
  // console.log(dispChecado)
  
  const matricula = idadeChecada && ensinoChecado && dispChecado
  
  console.log(matricula)
    
  return matricula

  // ERRO DE INTERPRETAÇÃO. ESTAVA PENSANDO EM PERGUNTAR A IDADE EM VEZ DE "SE É"

}

// checaValidadeInscricaoLabenu()