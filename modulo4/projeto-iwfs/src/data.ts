export type cliente = {
    id: number,
    nome : string,
    cpf : number,
    nascimento : string,
    saldo: number,
    extrato?: transacao[] | undefined
}

export type transacao = {
    valor: number,
    datadaTransacao: string,
    descricao: string
}

export const clientesDB: cliente[] = [
    { "id" : 1 , "nome": "Leonardo", "cpf": 11111111111 , "nascimento": "02/01/1977", "saldo" : 3500.00,
        extrato: [
            {   
                "valor": 100, 
                "datadaTransacao": "15/08/2002",
                "descricao": "Mercado Hortifruti"
            }
        ] },
    { "id" : 2 , "nome": "Raquel", "cpf": 22222222222 , "nascimento": "28/09/1982", "saldo" : 800.00,
        extrato: [

        ] },
    { "id" : 3 , "nome": "Laura", "cpf": 33333333333 , "nascimento": "02/01/1977", "saldo" : 300.00, extrato: [] },
    { "id" : 4 , "nome": "Camila", "cpf": 44444444444 , "nascimento": "10/05/1987", "saldo" : 10000.00, extrato: [] },
    { "id" : 5 , "nome": "Vinicius", "cpf": 55555555555 , "nascimento": "01/04/1979", "saldo" : 500.00, extrato: [] },
    { "id" : 6 , "nome": "Tobias", "cpf": 66666666666 , "nascimento": "02/05/2002", "saldo" : 2000.00, extrato: [] },
]
