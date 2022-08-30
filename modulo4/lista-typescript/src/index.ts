//Exercício 1

    // const nomeUsuario = (nome:string) => {
    //     return nome
    // }

    // let dia:number|string
    // let mes:number|string
    // let ano:number|string
    // var d:string = ("02/01/1977")
    // const nascimentoUsuario = (d:string) => {
        
    //     [dia, mes, ano] = d.split('/').map(Number);
    //     console.log(`Olá me chamo` , nomeUsuario("Leonardo") , `nasci no dia ` , dia , ` do mês de ` , mes , ` do ano de ` , ano ,``)
        
    //     return nascimentoUsuario
    // }
    // nascimentoUsuario(d)

//Exercício 2
    // const checaParametro:any = (input:any) => {
    //     console.log(typeof(input))        
        
    // }

    // checaParametro(4) // Number
    // checaParametro(true) // boolean
    // checaParametro(false) // boolean
    // checaParametro("Leonardo") // string
    // checaParametro("4") // string
    // checaParametro([]) // object



//Exercício 3
// type filme = {
//     nome: string,
//     ano: number,
//     genero: GENERO,
//     nota?:number
// }

// enum GENERO {
//  ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }

// const filme1:filme = {
//     nome: "Duna",
//     ano:2021,
//     genero:GENERO.ACAO,
//     nota: 74
// }

// const filme2:filme = {
//     nome: "Thor: Amor e Trovão",
//     ano:2022,
//     genero:GENERO.ACAO,
    
// }
//     const filmes = (dados:filme) => {

//         console.table (dados)

//         return filmes
//     }

//     filmes(filme1)
//     filmes(filme2)

//Exercício 4

// enum SETOR {
// 	FINANCEIRO="financeiro",
// 	MARKETING="marketing",
// 	VENDAS="vendas",
// }

// type colaboradores = {
//     nome: string,
//     salario: number,
//     setor: SETOR,
//     presencial: boolean
// }

// const funcionarios:colaboradores[] = [
// 	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
// ]

// const filtroColaboradores = (funcionarios:colaboradores[]) => {
//     //Filtrando os colaboradores de VENDAS
//     let funcionariosFiltrados:Array<object>
//     funcionariosFiltrados = funcionarios.filter((colaborador) => {
//         return colaborador.setor === "vendas"
//     })
    
//     return funcionariosFiltrados
// }

// console.log(filtroColaboradores(funcionarios))

//Exercício 5

// type user = {
//     name: string,
//     email: string,
//     role: string
// }

// const usuarios:user[] = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

// const filtroUsuarios = (usuarios:user[]) => {
//     //Filtrando os usuários ADMIN
//     let usuariosFiltrados:Array<object>
//     usuariosFiltrados = usuarios.filter((user) => {
//         return user.role === "admin"
//     })
    
//     return usuariosFiltrados
// }

// console.log(filtroUsuarios(usuarios))

//Exercício 6
// type cliente = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: Number[]
// }

// const clientes:cliente[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// const clientesEmprestimo = (clientes:any) => {
//     let arrayClientes = clientes
//     console.log(arrayClientes)
//     const initialValue = 0;
//     const sumWithInitial = arrayClientes.reduce(
//         (previousValue:number, currentValue:number) => previousValue + currentValue, initialValue);

//     console.log(sumWithInitial);
    
//     }

//     clientesEmprestimo(clientes)

//Exercício 7

type produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number|string
}

const produtos: produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]
//     const ordenaEstoque = (produtos:Array<object>) => {
//         let Ordenador:Array<object> = []
//         Ordenador = produtos
        
        const ajustaPreco = (produtos:Array<object>) => {
	        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	        return "R$ "+valorAjustado
        }
    }
console.table(ordenaEstoque(produtos))