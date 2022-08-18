"use strict";
const produtosLoja = [
    { nome: "Sunga", preco: 50, classificacao: "Banho" },
    { nome: "Biquini", preco: 120, classificacao: "Banho" },
    { nome: "Casaco", preco: 280, classificacao: "Inverno" },
    { nome: "Sobretudo", preco: 600, classificacao: "Inverno" },
    { nome: "Bermuda", preco: 80, classificacao: "Verão" },
    { nome: "Camiseta", preco: 40, classificacao: "Verão" },
    { nome: "Calcinha", preco: 60, classificacao: "Intímas" },
    { nome: "Sutiã", preco: 85, classificacao: "Intímas" },
];
const descontoemprodutos = (produtosLoja) => {
    let produtosVeraoDesconto = [];
    let produtosInvernoDesconto = [];
    let produtosBanhoDesconto = [];
    let produtosIntimasDesconto = [];
    produtosVeraoDesconto = produtosLoja.filter((produto) => {
        return produto.classificacao === "Verão";
    });
    const produtoscomVeraoDesconto = produtosVeraoDesconto.map((prod) => {
        return Object.assign(Object.assign({}, prod), { preco: Number((prod.preco * 0.95).toFixed(2)) });
    });
    produtosInvernoDesconto = produtosLoja.filter((produto) => {
        return produto.classificacao === "Inverno";
    });
    const produtoscomInvernoDesconto = produtosInvernoDesconto.map((prod) => {
        return Object.assign(Object.assign({}, prod), { preco: Number((prod.preco * 0.90).toFixed(2)) });
    });
    produtosIntimasDesconto = produtosLoja.filter((produto) => {
        return produto.classificacao === "Intímas";
    });
    const produtoscomIntimasDesconto = produtosIntimasDesconto.map((prod) => {
        return Object.assign(Object.assign({}, prod), { preco: Number((prod.preco * 0.93).toFixed(2)) });
    });
    produtosBanhoDesconto = produtosLoja.filter((produto) => {
        return produto.classificacao === "Banho";
    });
    const produtoscomBanhoDesconto = produtosBanhoDesconto.map((prod) => {
        return Object.assign(Object.assign({}, prod), { preco: Number((prod.preco * 0.96).toFixed(2)) });
    });
    console.table(produtoscomVeraoDesconto);
    console.table(produtoscomInvernoDesconto);
    console.table(produtoscomIntimasDesconto);
    console.table(produtoscomBanhoDesconto);
};
console.table(descontoemprodutos(produtosLoja));
//# sourceMappingURL=exercicio8.js.map