//Exercicio 3

const tarefas = [
	"Lavar a louça",
	"Comprar Leite"
]

const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)

console.log("Tarefa adicionada com sucesso!")
console.table(tarefas)

