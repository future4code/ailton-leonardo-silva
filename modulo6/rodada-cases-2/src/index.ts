import { app } from "./app"
import { athleteRouter } from './router/AthletesRouter'
import { contestRouter } from "./router/ContestRouter";
import { resultsRouter } from "./router/ResultsRouter";

app.use("/athlete", athleteRouter);
app.use("/contest", contestRouter);
app.use("/results", resultsRouter);



