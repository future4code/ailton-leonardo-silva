
type produtos = {
    nome: string,
    preco: number,
    classificacao: string,
}

const produtosLoja:produtos[] = [
    {nome: "Sunga", preco: 50, classificacao: "Banho"},
    {nome: "Biquini", preco: 120, classificacao: "Banho"},
    {nome: "Casaco", preco: 280, classificacao: "Inverno"},
    {nome: "Sobretudo", preco: 600, classificacao: "Inverno"},
    {nome: "Bermuda", preco: 80, classificacao: "Verão"},
    {nome: "Camiseta", preco: 40, classificacao: "Verão"},
    {nome: "Calcinha", preco: 60, classificacao: "Intímas"},
    {nome: "Sutiã", preco: 85, classificacao: "Intímas"},

]

    const descontoemprodutos = (produtosLoja:produtos[]) => {
        let produtosVeraoDesconto: Array<object> = []
        let produtosInvernoDesconto: Array<object> = []
        let produtosBanhoDesconto: Array<object> = []
        let produtosIntimasDesconto: Array<object> = []
        
        //Filtrando os produtos de Verão e dando desconto
        produtosVeraoDesconto = produtosLoja.filter((produto) => {
            return produto.classificacao === "Verão"
        })
        const produtoscomVeraoDesconto = produtosVeraoDesconto.map((prod:any) => {
            return {
                ...prod, preco: Number((prod.preco*0.95).toFixed(2)) // Desconto de 5%
            }
        })
        
        //Filtrando os produtos de Inverno e dando desconto
        produtosInvernoDesconto = produtosLoja.filter((produto) => {
            return produto.classificacao === "Inverno"
        })
        const produtoscomInvernoDesconto = produtosInvernoDesconto.map((prod:any) => {
            return {
                ...prod, preco: Number((prod.preco*0.90).toFixed(2)) // Desconto de 10%
            }
        })
        
        //Filtrando os produtos de Intímas e dando desconto
        produtosIntimasDesconto = produtosLoja.filter((produto) => {
            return produto.classificacao === "Intímas"
        })
        const produtoscomIntimasDesconto = produtosIntimasDesconto.map((prod:any) => {
            return {
                ...prod, preco: Number((prod.preco*0.93).toFixed(2)) // Desconto de 7%
            }
        })
        
        //Filtrando os produtos Intímos e dando desconto
        produtosBanhoDesconto = produtosLoja.filter((produto) => {
            return produto.classificacao === "Banho"
        })
        const produtoscomBanhoDesconto = produtosBanhoDesconto.map((prod:any) => {
            return {
                ...prod, preco: Number((prod.preco*0.96).toFixed(2)) // Desconto de 4%
            }
        })

        
        console.table(produtoscomVeraoDesconto)
        console.table(produtoscomInvernoDesconto)
        console.table(produtoscomIntimasDesconto)
        console.table(produtoscomBanhoDesconto)

    }
    console.table(descontoemprodutos(produtosLoja))