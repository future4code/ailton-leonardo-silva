import { connection } from "./BaseDatabase"
import { NewPurchase } from "../types"

const insertPurchase = async (purchase: NewPurchase): Promise<any> => {

    const { id, user_id, product_id , quantity , total_price } = purchase

    await connection
        .insert({
            id,
            user_id,
            product_id,
            quantity,
            total_price
        })
        .into("labecommerce_purchases")

}

export default insertPurchase;