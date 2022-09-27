import express, {Express} from "express"
import cors from "cors"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
   console.log("Server ready!")
})

export default app