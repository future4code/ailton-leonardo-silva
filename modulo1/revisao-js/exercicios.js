// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
    
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
 
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    array.sort(function(a, b) {
      return a - b;
    });
    return array  
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    const retornaPares = array.filter((numero) => {
    return numero % 2 === 0
    })
    return retornaPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    // const retornaPares = array.filter((numero) => {
    //     return (numero % 2 === 0) 
    //     numero = Math.Pow(numero,2) 
    //     console.log (numero)
    //     })
    //     return numero

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for(let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    
    console.log(maior)
    return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    // const numeroMaior = Number(prompt("Digite o primeiro número"))
    // const numeroMenor = Number(prompt("Digite o segundo número"))

    // if (numeroMaior % numeroMenor === 0 && (numeroMaior - numeroMenor) > 0) {
    //     const resultado = {
    //         maiorNumero: numeroMaior,
    //         maiorDivisivelPorMenor: true,
    //         diferenca: (numeroMaior-numeroMenor)
    //     }
    //     return ("maiorNumero:", ${resultado.numeroMaior}, "maiorDivisivelPorMenor:", ${resultado.maiorDivisivelPorMenor},"diferenca:", ${resultado.diferenca}")

    // }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    
    let arr = []
    for (let i = 0; arr.length < n ;i++) // i não pode comparar com n, tem que usar como tamanho
        if  (i % 2 == 0) {
            arr.push(i)
        }
    return arr    
   
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
    let triangulo
    if ((ladoA == ladoB) && (ladoB == ladoC)) {
            triangulo = "Equilátero";
        } else if  (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            triangulo = "Isósceles";
        } else {
            triangulo = "Escaleno";
        }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    // const segundoMaioreMenor = array.filter((numero) => {
    // return array(array.length-2), array(1)
    // })
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    frase = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)

    return frase;
      
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    const pessoaAnonima = {
        ...pessoa, nome: "ANÔNIMO"
    }

    return pessoaAnonima

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}    

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}