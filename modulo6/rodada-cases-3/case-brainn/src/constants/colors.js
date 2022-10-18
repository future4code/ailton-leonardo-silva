//Criando o arquivo de cores de acordo com o Figma do projeto

export const megasenaColor = "#6BEFA3"
export const quinaColor = "#8666EF"
export const lotofacilColor = "#DD7AC6"
export const lotomaniaColor = "#FFAB64"
export const timemaniaColor = "#5AAD7D"
export const diadesorteColor = "#BFAF83"

export const backgroundColor = "#EFEFEF"
export const backgroundColor2 = "#DDDDDD"


export const whiteColor = "#FFFFFF"
export const blackColor = "#000000"
export const greyColor = "#454545"

export const Color = (type) => {

    switch (type) {
      case "mega-sena":
          return "#6BEFA3"
      case "quina":
          return "#8666EF"
      case "lotofácil":
          return "#DD7AC6"
      case "lotomania":
          return "#FFAB64"
      case "timemania":
          return "#5AAD7D"
      case "dia de sorte":
          return "BFAF83"
      
      default:
          return "#6BEFA3";
    }
}