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
   // console.log("Boas vindas ao jogo de Blackjack!")

   // if (confirm("Gostaria de iniciar uma rodada?")) {
   //    // Começando com a lógica do sorteio. Lembrando que eu estou jogando contra o CPU.

   //    // Iniciando o jogo.
   //    let valorCPU = 0
   //    let valorUsuario = 0
   //    let i;
   //       for (i = 0; i < 2; i++) {
   //          let cartacomprada = comprarCarta() 
   //          valorCPU = Number(valorCPU) + Number(cartacomprada.valor)
   //          console.table(`O computador comprou ${cartacomprada.texto}`)
   //          console.table(`A soma das cartas do CPU é ${valorCPU}`)
   //       }
   //       for (i = 0; i < 2; i++) {
   //          let cartacomprada = comprarCarta() 
   //          valorUsuario = Number(valorUsuario) + Number(cartacomprada.valor)
   //          console.table(`O jogador comprou ${cartacomprada.texto}`)
   //          console.table(`A soma das cartas do jogador é ${valorUsuario}`)
   //       } 
      
   //       if (valorCPU > valorUsuario) {
   //          console.log(`O computador venceu a rodada. A mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
         
   //       } else if (valorCPU = valorUsuario) {
   //          console.log(`EMPATE!!!. A mão do CPU foi de ${valorCPU} e a sua mão foi ${valorUsuario}.`)
         
   //       } else {
   //          console.log(`Você venceu a rodada. A sua mão foi de ${valorUsuario} e a mão do CPU foi de ${valorCPU}.`)
   //       }
   //    } else {
   //    console.log("O jogo acabou.")
   // }