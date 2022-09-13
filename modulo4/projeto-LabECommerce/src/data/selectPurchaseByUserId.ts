import { connection } from "./BaseDatabase";

const selectPurchaseByUserId = async (user_id: string) => {
  const result = await connection
    .select("*")
    .from("labecommerce_purchases")
    .where("user_id", user_id);

  return result;
};

export default selectPurchaseByUserId;