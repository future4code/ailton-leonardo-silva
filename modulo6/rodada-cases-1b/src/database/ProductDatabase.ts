import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "CASE_AMARO_produto";
  public static TABLE_TAGS = "CASE_AMARO_tags";
  public static TABLE_PRODUCTS_TAGS = "CASE_AMARO_produto_tags";

  //Método para buscar os PRODUTOS e suas TAGS
  async fetchAllProducts(): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS_TAGS}
        INNER JOIN ${ProductDatabase.TABLE_PRODUCTS} ON ${ProductDatabase.TABLE_PRODUCTS}.id = ${ProductDatabase.TABLE_PRODUCTS_TAGS}.produto_id
        INNER JOIN ${ProductDatabase.TABLE_TAGS} ON ${ProductDatabase.TABLE_TAGS}.id = ${ProductDatabase.TABLE_PRODUCTS_TAGS}.tag_id;
    `);
    return result[0];
  }

  //Método para buscar os PRODUTOS por ID
  async fetchProductsById(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
      SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS} WHERE id = ${id}
    `);
    return result[0];
  }

  //Método para buscar as TAGS por ID
  async fetchTags(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
      SELECT * FROM ${ProductDatabase.TABLE_TAGS} WHERE id = ${id}
    `);
    return result[0];
  }

  //Método para buscar as TAGS de um produto por sua ID
  async fetchTagsById(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS_TAGS} WHERE produto_id = ${id}
    `);
    return result[0];
  }

  //Método para buscar os produtos pelo nome
  async selectProductByName(search: string): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS} WHERE nome LIKE '%${search}%'
    `);
    return result[0];
  }
 
  //Método para buscar os produtos pela tag
  async selectProductByTag(search: string): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${ProductDatabase.TABLE_TAGS} WHERE tag LIKE '%${search}%'
    `);
    return result[0];
  }

  //Método para buscar os produtos por sua TAG
  async fetchProductsByTag(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
        SELECT * FROM ${ProductDatabase.TABLE_PRODUCTS_TAGS} WHERE tag_id = ${id}
    `);
    return result[0];
  }
}