// Exercícios de interpretação de código

// Exercício 1
// A) Ele recebe pelo prompt um número informado. E checa se esse número é divisível por 2.
// B) Para números que forem divisíveis por 2.
// C) Qualquer outro resultado. 

// Exercício 2

// A) Serve para informar o preço de uma das frutas após a escolha do usuário.
// B) 2.25
// C) 5 //Sem o break ele vai procurar o valor que estiver em default.

// Exercício 3

// A) Armazenando na constante numero o valor informado pelo usuário.
// B) 10 - Esse número passou no teste. -10 - Não vai informar nada.
// C) No primeiro console dentro do if, não tem erro. Somente no segundo
// ele chama console.log(mensagem), mas a definição da variável mensagem, foi feita dentro do if
// então ele não vai achar a referência e dar um erro.
   
// Exercícios de escrita de código

// Exercício 1

    // const idadeMaior = Number(prompt("Informe a sua idade."))

    // if (idadeMaior >= 18) {
    //     console.log(`Você pode dirigir a sua idade é ${idadeMaior}`)
    //   } 
    //     else {
    //     console.log(`Você NÃO pode dirigir a sua idade é ${idadeMaior}`)
    //   }

// Exercício 2

    // const horarioAula = prompt("Digite M para Manhã, V para Vespertino ou N para Noturno");
    // console.log(horarioAula)

    // if (horarioAula == "M") {
    //     console.log("Bom dia!")
    //     } else if (horarioAula == "V") {
    //     console.log("Boa tarde!")
    //     } else {
    //     console.log("Boa noite!")
    // }

// Exercício 3

    // const horarioAula = prompt("Digite M para Manhã, V para Vespertino ou N para Noturno");
    // console.log(horarioAula)

    // const verificaHorarioAula = (horarioAula) => {
    //         switch(horarioAula) {
    //             case 'M':
    //             return `Bom dia!`
    //             case 'V':
    //             return `Boa tarde!`
    //             case 'N':
    //             return `Boa noite!`
    //             default:
    //             return `Horário inválido.`    
    //         }
    // }   
    // console.log(verificaHorarioAula(horarioAula));

// Exercício 4 e Desafio 1

    // const generoFilme = prompt("Qual é o genero do filme?")
    // const valorFilme = Number(prompt("Qual o preço da entrada?"))

    // if (generoFilme == 'fantasia' && valorFilme < 15) {
    //     const lanche = prompt("Qual o lanche que você vai comprar?")
        
    //     console.log(`Bom filme!!`)
    //     console.log(`Aproveite o seu ${lanche}.`)
    //     } 
    //     else {
    //     console.log(`Escolha outro filme!!!`)
    //   }

// Desafio 2
   
    const nome = prompt("Digite o seu nome.");
    const tipoJogo = prompt("Tipo do Jogo: IN para Internacional ou DO para Doméstico.")
    const etapaJogo = prompt("Etapa do Jogo: SF para semifinal, DT para decisão terceiro lugar ou FI para final.")
    const categoria = Number(prompt("Qual a categoria do ingresso, 1, 2, 3 ou 4?"))
    const quantidadeIngressos = Number(prompt("Quantos ingressos você deseja comprar?"))
    // VALORES DOS INGRESSOS
    const precoSFCAT1 = 1320
    const precoSFCAT2 = 880
    const precoSFCAT3 = 550
    const precoSFCAT4 = 220
    const precoDTCAT1 = 660
    const precoDTCAT2 = 440
    const precoDTCAT3 = 330
    const precoDTCAT4 = 170
    const precoFICAT1 = 1980
    const precoFICAT2 = 1320
    const precoFICAT3 = 880
    const precoFICAT4 = 330

    let total

        const totalCompra = (nome, tipoJogo, etapaJogo, categoria, quantidadeIngressos) => {
            if (tipoJogo == 'IN') { // TIPO JOGO INTERNACIONAL
                
                if (categoria = 1) {
                        total = (quantidadeIngressos * precoSFCAT1 * 4.10)
                        console.log (`O total é ${total}`)
                        return total
                    } else if (categoria = 2) {
                        total = (quantidadeIngressos * precoSFCAT2 * 4.10)
                        return total
                    } else if (categoria = 3) {
                        total = (quantidadeIngressos * precoSFCAT3 * 4.10)
                        return total
                    } else 
                        total = (quantidadeIngressos * precoSFCAT4 * 4.10)
                        return total
                

                } else { // TIPO JOGO DOMÉSTICO
                    console.log(tipoJogo)
                    return total
                }
        
        console.log(total)
        return total        
        
        } // FINAL DA FUNÇÃO
     
        console.log(`Nome do Cliente: ${nome}`)
        console.log(`Tipo do Jogo: ${tipoJogo}`)
        console.log(`Etapa do Jogo: ${etapaJogo}`)
        console.log(`Categoria: ${categoria}`)
        console.log(`Quantidade de Ingressos: ${quantidadeIngressos}`)
        console.log(`--- Valores ---`)
        // console.log(`Valor do Ingresso: R$${}`)
        console.log(`Valor Total: R$${total}`)

        totalCompra(nome, tipoJogo, etapaJogo, categoria, quantidadeIngressos)