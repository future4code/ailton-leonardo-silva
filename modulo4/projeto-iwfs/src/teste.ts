let date1 = "19/08/2004"
let date2 = "20/08/2004"

const ChecaIdade18 = (date:any) => {
    const d = new Date()
    //Transformando em padrão americano a data brasileira
    let data_brasileira = date2;
    let data_americana = data_brasileira.split('/').reverse().join('-');
    date2 = data_americana
    console.log(date2)

    date = new Date (date2)
    //Pegar o dia atual
    const anoAtual = d.getFullYear()
    const mesAtual = d.getMonth() + 1
    const diaAtual = d.getDate()
    
    //Desmembrando a data de nascimento
    const ano = date.getFullYear()
    const dia = (date.getDate()) + 1
    const mes = (date.getMonth()) + 1

    const idade = anoAtual - ano
    
    if (idade <= 18 && mesAtual < mes || mesAtual === mes && diaAtual < dia) {
        console.log("Menor de Idade")
    } else {
        console.log("Maior de Idade")
    }
}

ChecaIdade18(date2)