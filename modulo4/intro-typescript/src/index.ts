//Typescript configurado e rodando
//Exercicio 1

//     function checaTriangulo(a:number, b:number, c:number):string {
//         if (a !== b && b !== c) {
//             console.log("Escaleno")
//         return "Escaleno";
//         } else if (a === b && b === c) {
//             console.log("Equilátero")
//         return "Equilátero";
//         } else {
//             console.log("Isósceles")
//         return "Isósceles";
//         }
//     }

// checaTriangulo(20, 20, 40)

//Exercício 2

// function imprimeTresCoresFavoritas() {
//     const cor1:string = "Branco"
//     const cor2:string = "Preto"
//     const cor3:string = "Cinza"
//     console.log([cor1, cor2, cor3])

//  }

// imprimeTresCoresFavoritas()

//Exercício 3

// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }
//  console.log(checaAnoBissexto(2020)) // True
//  console.log(checaAnoBissexto(2022)) // False

//Exercício 4

// function comparaDoisNumeros(num1:number, num2:number) {
//     let maiorNumero:number;
//     let menorNumero:number;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca:number = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

//   console.log(comparaDoisNumeros(50, 200)) // 150
//   console.log(comparaDoisNumeros(10, 2)) // 8

//Exercício 5

// function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ) {
//     let idade:number = anoAtual - anoNascimento
//     let tempoCarteira:number = anoAtual - anoEmissao
   
//     if(idade <= 20 ) {
//         if (tempoCarteira >= 5) {
//             console.log("passou dos 5 anos precisa renovar")
//         } else {
//             console.log("ainda não passou os 5 anos")
//         }
       
//     }else if(idade >= 20 || idade <= 50) {
//         if (tempoCarteira >= 10) {
//             console.log("passou dos 10 anos precisa renovar")
//         } else {
//             console.log("ainda não passou os 10 anos")
//         }
//     }else if(idade > 50) {
//         if (tempoCarteira >=15) {
//             console.log("passou dos 15 anos precisa renovar")
//         } else {
//             console.log("ainda não passou os 15 anos")
//         } 
//     }else {
//            console.log("error")
//        }
//    }
//    checaRenovacaoRG(2022, 2003, 2021)

//Exercício 6

    // const checaNumeros = ((num1:number , num2:number) => {
    //     let maiorNumero:number;
    //     let menorNumero:number;
      
    //     if (num1 > num2) {
    //       maiorNumero = num1;
    //       menorNumero = num2;
    //     } else {
    //       maiorNumero = num2;
    //       menorNumero = num1;
    //     }
    //     console.log("A soma dos números é: ", maiorNumero + menorNumero)
    //     console.log("A subtração dos números é: ", maiorNumero - menorNumero)
    //     console.log("A multiplicação dos números é: ", maiorNumero * menorNumero)
    //     console.log("o MAIOR número é: ", maiorNumero)
    // })

    // checaNumeros(25 , 70)

//Exercício 7

    // function trocaDNAparaRNA(str:string) {
    //     let aux:string
    //     aux = str.replace(/A/g, "U")
    //     aux = aux.replace(/T/g, "A")
    //     aux = aux.replace(/C/g, "E") // Usando uma letra que não existe no DNA ou RNA para auxiliar
    //     aux = aux.replace(/G/g, "C")
    //     aux = aux.replace(/E/g, "G")

    //     return aux
    // }

    // console.log(trocaDNAparaRNA("ATTGCTGCGCATTAACGACGCGTA"))

//Exercício 8

// function reverteString(str:string):string {
//     if (str === "")
//       return "";
//     else
//       return reverteString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverteString("Teste de reversão de strings"));

//Exercício 9

// function checaAluno(idade:number , ensino:boolean, horas: number, curso: string) {
        
//     if (idade >= 18) {
//         if (ensino) {
//             if (curso === "diurno" && horas >= 40) {
//                 console.log("Parabéns!!! Sua inscrição para o curso diurno foi aprovada!")
//             } else if (curso === "noturno" && horas >= 20) {
//                 console.log("Parabéns!!! Sua inscrição para o curso noturno foi aprovada!")
//             } else {
//                 console.log("Você não tem horas disponíveis para realizar o curso.")
//             }
//         } else {
//             console.log ("Você precisa ter o ensino médio completo para realizar o curso.")
//         }
//     } else {
//         console.log ("Você precisa ser maior de 18 anos para fazer o curso.")
//     }
// }

// checaAluno(17, true, 80, "noturno")