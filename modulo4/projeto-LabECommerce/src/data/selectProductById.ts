import { connection } from "./BaseDatabase";

const selectProductById = async (id: string) => {
  const result = await connection
    .select("*")
    .from("labecommerce_products")
    .where("id", id);

  return result;
};

export default selectProductById;
