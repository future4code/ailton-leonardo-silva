class RecipeUpdate {
    private title: string;
    private description: string;
  
    constructor(
      title: string,
      description: string,
    ) {
      this.title = title;
      this.description = description;
    }
  
    //Métodos de acesso aos valores da classe RecipeUpdate
    getTitle() {
      return this.title;
      ;
    }
  
    getDescription() {
      return this.description;
    }
  }
  
  export default RecipeUpdate;