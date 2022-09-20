//MODELO DE RECEITA
 
  class Recipe {
    private id: string;
    private title: string;
    private description: string;
    private createdAt: Date;
    private user_id: string;
    
  
    constructor(
      id: string,
      title: string,
      description: string,
      createdAt: Date,
      user_id: string
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.createdAt = createdAt;
      this.user_id = user_id;
    }
  
    //Métodos de acesso aos valores da classe Recipe
    getRecipeId() {
      return this.id;
    }
  
    getTitle() {
      return this.title;
      ;
    }
  
    getDescription() {
      return this.description;
    }
  
    getCreatedAt() {
      return this.createdAt;
    }
    
    getUserId() {
      return this.user_id;
    }
  }
  
  export default Recipe;
  