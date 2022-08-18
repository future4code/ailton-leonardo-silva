"use strict";
function obterEstatisticas(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    let soma = 0;
    for (let num of numeros) {
        soma += num;
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
console.log(obterEstatisticas([3, 5, 1, 4, 10, 8]));
const amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas(numeros) {
        const numerosOrdenados = numeros.sort((a, b) => a - b);
        let soma = 0;
        for (let num of numeros) {
            soma += num;
        }
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        };
        return estatisticas;
    }
};
console.table(amostra);
//# sourceMappingURL=exercicio2.js.map