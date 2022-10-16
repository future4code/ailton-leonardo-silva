//***** MÉTODO DE CONVERSÃO DE DATAS US TO BR/DADOS *****
export const FormatDate = (date) => {
    //Funções auxiliares para formatar a data sem zero para inserir o zero
    // "5/2/2022" ---> "05/02/2022"
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }
    function formatDate(date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    }

    let dateFormatted = formatDate(date);

    return { dateFormatted };
  }