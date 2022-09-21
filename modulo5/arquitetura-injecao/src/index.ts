import { app } from "./app"
import { pingRouter } from './router/pingRouter'
import { userRouter } from './router/userRouter'


app.use("/ping", pingRouter)
app.use("/users", userRouter)