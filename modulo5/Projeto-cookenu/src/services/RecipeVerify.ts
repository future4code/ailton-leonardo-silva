import RecipeData from "../data/RecipeData";

class RecipeVerify {

  //***** MÉTODO DE VERIFICAÇÃO DE TODOS OS DADOS DA CRIAÇÃO DE RECEITAS *****
  async recipeCheck(title: string, description: string) {
    //Cheque do parâmetro nome
    if (!title) {
      throw new Error("O título deve ser informado.");
    }
    
    //Cheque do parâmetro description
    if (!description) {
        throw new Error("A descrição deve ser informada.");
      }
    
      return { title, description };  
  }

  //***** MÉTODO DE VERIFICAÇÃO DO ID DE RECEITAS *****
  async recipeIdCheck(id: string) {
    //Cheque do parâmetro nome
    if (!id) {
      throw new Error("O id da receita deve ser informado.");
    }

    //Instanciando o Banco de Dados
    const recipeData = await new RecipeData().fetchRecipeById(id)
    
    if (!recipeData) {
      throw new Error ("A receita não foi encontrada.")
    } else {
      return { id }
    }
      
  }
}

export default RecipeVerify;