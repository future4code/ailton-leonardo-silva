import { ContestBusiness } from "../business/ContestBusiness";
import { ContestController } from "../controller/ContestController";
import { ContestDatabase } from "../database/ContestDatabase";
import { IdGenerator } from "./IdGenerator";

export const contestController = new ContestController(
    new ContestBusiness(
        new ContestDatabase(),
        new IdGenerator()
    )
);
