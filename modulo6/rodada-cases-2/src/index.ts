import { app } from "./app"
import { athleteRouter } from './router/AthletesRouter'
import { contestRouter } from "./router/ContestRouter";

app.use("/athlete", athleteRouter);
app.use("/contest", contestRouter);



