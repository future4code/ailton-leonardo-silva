import { ResultsBusiness } from "../business/ResultsBusiness";
import { ResultsController } from "../controller/ResultsController";
import { ContestDatabase } from "../database/ContestDatabase";
import { ResultsDatabase } from "../database/ResultsDatabase";

export const resultsController = new ResultsController(
    new ResultsBusiness(
        new ResultsDatabase(),
        new ContestDatabase()
    )
);