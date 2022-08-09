//Exercicio 2

const operacao = process.argv[2]
const A = Number(process.argv[3])
const B = Number(process.argv[4])

const soma = (A + B)
const subtrai = (A - B)
const multiplica = (A * B)
const divide = (A / B)

switch(operacao){
	case "soma":
		console.log("O valor da soma é" , soma)
		break;
	case "subtrai":
		console.log("O valor da subtração é" , subtrai)
		break;
    case "multiplica":
        console.log("O valor da multiplicação é" , multiplica)
        break;
    case "divide":
        console.log("O valor da divisão é" , divide)
        break;    
}

// console.log("A soma dos valores é " , soma )
// console.log("A subtração dos valores é " , subtrai )
// console.log("A multiplicação dos valores é " , multiplica )
// console.log("A divisão dos valores é " , divide )