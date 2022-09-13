import { Request, Response } from "express"
import selectPurchaseByUserId from "../data/selectPurchaseByUserId"



const getPurchaseByUserId = async (req: Request, res: Response) => {

    const user_id:string = req.params.user_id

    try {
        const purchases = await selectPurchaseByUserId(user_id)

        res.status(200).send({ purchases: purchases })
    }
    catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }
}

export default getPurchaseByUserId;