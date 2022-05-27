/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// No desafio consegui fazer até o momento com que o usuário tenha chance de comprar cartas
// até estourar 21. E o CPU checa para tentar ganhar do usuario.
// Falta exibir todas as cartas. Para isso vou ter que armazenar um array.

   console.log("Boas vindas ao jogo de Blackjack!")

   if (confirm("Gostaria de iniciar uma rodada?")) {
      // Começando com a lógica do sorteio. Lembrando que eu estou jogando contra o CPU.
      // REGRAS DE DESAFIO
      // Iniciando o jogo.
      let valorCPU = 0
      let valorUsuario = 0
      let i;

         // Nesse FOR armazenamos e exibimos as 2 primeiras cartas do jogador
         for (i = 0; i < 2; i++) {
            let cartacomprada = comprarCarta() 
            valorUsuario = Number(valorUsuario) + Number(cartacomprada.valor)
            console.log(`O jogador comprou ${cartacomprada.texto}`)
            console.log(`A soma das cartas do jogador é ${valorUsuario}`)
         } 

         // Nessa parte iremos receber as 2 primeiras cartas do cpu e só exibiremos a primeira.
         let cartacompradaCPU1 = comprarCarta()
         let cartacompradaCPU2 = comprarCarta()
         
         valorCPU = Number(cartacompradaCPU1.valor) // Nesse momento só marquei o valor da CPU com uma carta
         console.log(`O computador comprou ${cartacompradaCPU1.texto}`)
         console.log(`A soma das cartas do CPU é ${valorCPU}`)
         
         // Nesse While vamos dar a chance do jogador comprar mais cartas, ou até estourar 21
         while (confirm(`Mais uma carta?`) === true ) {
            let cartacomprada = comprarCarta()
            valorUsuario = Number(valorUsuario) + Number(cartacomprada.valor)
            console.log(`O jogador comprou ${cartacomprada.texto}`)
               if (valorUsuario < 21) {
                  console.log(`A soma das cartas do jogador é ${valorUsuario}`)
               } else {
                  console.log("Você perdeu a rodada!")
                  console.log(`DERROTA!!! O computador venceu a rodada, a mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
                  end // Pesquisar como parar a execução do script
               }    
         }
         
         valorCPU = Number(cartacompradaCPU1.valor) + Number(cartacompradaCPU2.valor) // Agora o CPU pode revelar a mão.
         // Nesse While vamos dar a chance do CPU vencer ou estourar 21
         console.log (`O CPU te mostrou a 2 carta dele que é um ${cartacompradaCPU2.texto} e sua mão vale ${valorCPU}`)
         while ((valorCPU < valorUsuario) && (valorCPU < 22)) {
            let cartacomprada = comprarCarta()
            valorCPU = Number(valorCPU) + Number(cartacomprada.valor)
            console.log(`A CPU comprou ${cartacomprada.texto}`)
               if ((valorCPU > valorUsuario) && (valorCPU <= 21)) {
                  console.log(`DERROTA!!! O computador venceu a rodada, a mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
               } else if ((valorUsuario == valorCPU) && (valorCPU < 22)) {
                  console.log(`EMPATE!!!. A mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
               } else {
                  
               }
               console.log(`VITÓRIA!!! Você venceu a rodada, a sua mão foi de ${valorUsuario} e a mão do CPU foi de ${valorCPU}.`)               
         }    
      
         

         // console.log(`Vendo se as variáveis ainda estão com os valores valorCPU ${valorCPU} e valor jogador ${valorUsuario}.`)
         
         // if ((valorCPU > valorUsuario) && (valorCPU <= 21)) {
         //       console.log(`DERROTA!!! O computador venceu a rodada, a mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
         //    } else if ((valorUsuario > valorCPU) && (valorUsuario <= 21)) {
         //       console.log(`VITÓRIA!!! Você venceu a rodada, a sua mão foi de ${valorUsuario} e a mão do CPU foi de ${valorCPU}.`)
         //    } else if (valorUsuario == valorCPU) {
         //       console.log(`EMPATE!!!. A mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
         // }
         console.log("O jogo acabou.")
      
      } else {
         // FIM DE JOGO
         console.log("O jogo acabou.")
   }
   

   