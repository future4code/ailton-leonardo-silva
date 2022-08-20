"use strict";
let date1 = "19/08/2004";
let date2 = "20/08/2004";
const ChecaIdade18 = (date) => {
    const d = new Date();
    let data_brasileira = date2;
    let data_americana = data_brasileira.split('/').reverse().join('-');
    date2 = data_americana;
    console.log(date2);
    date = new Date(date2);
    const anoAtual = d.getFullYear();
    const mesAtual = d.getMonth() + 1;
    const diaAtual = d.getDate();
    const ano = date.getFullYear();
    const dia = (date.getDate()) + 1;
    const mes = (date.getMonth()) + 1;
    const idade = anoAtual - ano;
    if (idade <= 18 && mesAtual < mes || mesAtual === mes && diaAtual < dia) {
        console.log("Menor de Idade");
    }
    else {
        console.log("Maior de Idade");
    }
};
ChecaIdade18(date2);
//# sourceMappingURL=teste.js.map