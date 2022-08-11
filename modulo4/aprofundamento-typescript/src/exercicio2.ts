//a) Quais são as entradas e saídas dessa função?
//Entrada - numeros , saída - estatisticas
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// numeros, vem através de um array de números e numerosOrdenados recebe tambémuma lista
//depois de organizar a lista.
// Também tem soma, maior, menor e media recebendo os valores number

// Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior:number, menor:number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([3,5,1,4,10,8]))

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros
// e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

const amostra =  {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas(numeros:number[]) : {
        maior: number,
        menor: number,
        media: number } {
        const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
        )

        let soma:number = 0

        for (let num of numeros) {
            soma += num
        }

        const estatisticas: {maior:number, menor:number, media: number} = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
        return estatisticas
    }
}
console.table(amostra)