//Exercício 2

export type todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercício 3
export const todos: todo[] = [ 
    {
        userId: 1,
        id: 1,
        title: "Lavar o carro",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Pagar as contas",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "Dar banho no Tobias",
        completed: false
    },
    {
        userId: 2,
        id: 1,
        title: "Fazer o jantar",
        completed: true
    },
    {
        userId: 2,
        id: 2,
        title: "Ver TV",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Enviar emails",
        completed: false
    },
    {
        userId: 3,
        id: 1,
        title: "Almoçar",
        completed: true
    },
    {
        userId: 3,
        id: 2,
        title: "Arrumar a mochila",
        completed: false
    },
    {
        userId: 3,
        id: 3,
        title: "Fazer os deveres",
        completed: false
    },
]