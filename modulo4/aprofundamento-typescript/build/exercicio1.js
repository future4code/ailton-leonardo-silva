"use strict";
let str = "Aula de TypeScript";
let meuNumero = 10;
meuNumero = "10";
var coresArcoiris;
(function (coresArcoiris) {
    coresArcoiris["VERMELHO"] = "vermelho";
    coresArcoiris["LARANJA"] = "laranja";
    coresArcoiris["AMARELO"] = "amarelo";
    coresArcoiris["VERDE"] = "verde";
    coresArcoiris["AZUL"] = "azul";
    coresArcoiris["ANIL"] = "anil";
    coresArcoiris["VIOLETA"] = "violeta";
})(coresArcoiris || (coresArcoiris = {}));
const pessoa1 = {
    nome: "Leonardo",
    idade: 45,
    corFavorita: coresArcoiris.AZUL
};
const pessoa2 = {
    nome: "Raquel",
    idade: 39,
    corFavorita: coresArcoiris.VERMELHO
};
const pessoa3 = {
    nome: "Laura",
    idade: 9,
    corFavorita: coresArcoiris.VIOLETA
};
const arrayPessoas = [];
arrayPessoas.push(pessoa1);
arrayPessoas.push(pessoa2);
arrayPessoas.push(pessoa3);
console.table(arrayPessoas);
//# sourceMappingURL=exercicio1.js.map