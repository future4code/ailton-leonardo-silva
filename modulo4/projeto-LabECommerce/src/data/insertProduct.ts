import { connection } from "./BaseDatabase"
import { NewProduct } from "../types"

const insertProduct = async (product: NewProduct): Promise<any> => {

    const { id, name, price , image_url } = product

    await connection
        .insert({
            id,
            name,
            price,
            image_url
        })
        .into("labecommerce_products")

}

export default insertProduct;