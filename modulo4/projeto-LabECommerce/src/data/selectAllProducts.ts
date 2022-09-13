import { connection } from "./BaseDatabase";

const selectAllProducts = async (search: string, order: string) => {
  if (!order && !search) {
    const result = await connection
      .select("*")
      .from("labecommerce_products");
    return result;
  } else if (!order) {
    const result = await connection
      .select("*")
      .where("name","like",`%${search}%`)
      .from("labecommerce_products");
    return result;
  } else { // Caso não seja informado a busca.
  const result = await connection
      .select("*")
      .orderBy("name", `${order}`)
      .from("labecommerce_products");
    return result;
  } 
};

export default selectAllProducts;
