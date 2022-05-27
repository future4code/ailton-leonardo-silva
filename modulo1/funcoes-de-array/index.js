// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1)
// Vai retornar o novo array e mais as posições de index de cada elemento.

// 2)

// Ele salvou na const novoArrayB apenas os nomes do array que ele mapeou.
// Portanto só vai exiber os nomes na constante.

// 3)

// Ao pedir item.apelido !== "Chijo", ele não vai armazenar esse valor em novoArrayC.
// E só vai imprimir as 2 primeiras posicóes da constante.
// Que seriam Mandi e Laura.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1

const arrayPets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// A)
// RETORNA APENAS OS NOMES DOS CACHORROS

// const retornaString = arrayPets.map((item) => {
//     console.log(`Os nomes dos cachorros são ${item.nome}.`)
// })

// B)

    // const retornaPets = arrayPets.filter((pets,index,array) => {
    //     return pets.raca === 'Salsicha'    
    
    // })
    
    // console.log (retornaPets)

// C)

    // const retornaPets = arrayPets.filter((pets) => {
    //     if(pets.raca === 'Poodle') {
    //         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`)
    //     }
    // })
 
// EXERCÍCIO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// A)
    
    // const retornaProdutos = produtos.filter((itens,index,array) => {
    //     console.log(itens.nome)
    //     return itens.nome
    // })
    
    // console.log(retornaProdutos)

// B)
    // const descontoProdutos = produtos.filter((itens,index,array) => {
    //         nomeProduto = {nome: itens.nome, preco:(itens.preco * 0.95)}
    //         console.log (nomeProduto)
    //         return nomeProduto
    // })
    // console.log (descontoProdutos)

// C)

    // const retornaProdutos = produtos.map((itens,index,array) => {
    //     if (itens.categoria === 'Bebidas') {
    //         console.log(itens.nome)
    //         return itens.nome
    //     }
    // })
    // console.log(retornaProdutos) 
    
    // const retornaProdutos = produtos.filter((produto) => {
    //     return produto.categoria === 'Bebidas'
    // }).map((produto) => {
    //     return produto.nome
    // })
   
    // console.log(retornaProdutos)

    // Funcionou usando o filter junto com o map, bem complicado.

// D)

    // const retornaProdutos = produtos.filter((itens,index,array) => {
    //     console.log(itens.nome)
    //     return itens.nome.includes('Ypê')
    // })
    
    // console.log(retornaProdutos)

// E)

    // const retornaProdutos = produtos.filter((produto) => {
    //     return produto.nome.includes('Ypê')
    // }).map((produto) => {
    //     return (console.log(`Compre ${produto.nome} por ${produto.preco}`))
    // })
   
    
// DESAFIO
// A)

//     let pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

    // let pokemons = ['Bulbasaur', 'Bellsprout', 'Charmander', 'Vulpix', 'Squirtle', 'Psyduck']
    // pokemons.sort()
    // console.log(pokemons)
    // Em uma string simples o melhor metodo seria o apresentado de cima

    // pokemons.sort(function (x, y) {
    //     let a = x.nome.toUpperCase()
    //     let b = y.nome.toUpperCase()
    //     return a == b ? 0 : a > b ? 1 : -1;
    // })
    // console.table(pokemons)
    // Essa foi a melhor solução pesquisada de uso do sort em objetos com strings

// B)
    
    // let pokemons = [
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bellsprout", tipo: "grama" },
    //     { nome: "Charmander", tipo: "fogo" },
    //     { nome: "Vulpix", tipo: "fogo" },
    //     { nome: "Squirtle", tipo: "água" },
    //     { nome: "Psyduck", tipo: "água" },
    // ]
 
    // console.log(pokemons.filter((elem, index, self) => index === self.indexOf(elem)))

    // console.log([... new Set(pokemons)])   