import * as bcryptjs from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export class HashManager {

    async hashDaSenha(senha: string): Promise<string> {

        const cost = Number(process.env.COST);
        const salt = await bcryptjs.genSalt(cost);
        const hash = await bcryptjs.hash(senha, salt)
        return hash
    }

    async compare(senha: string, hash: string): Promise<boolean> {
        return bcryptjs.compare(senha, hash)
    }
}
