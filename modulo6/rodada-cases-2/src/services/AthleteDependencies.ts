import { AthleteBusiness } from "../business/AtheleteBusiness";
import { AtheleteController } from "../controller/AthleteController";
import { AthleteDatabase } from "../database/AthleteDatabase";
import { IdGenerator } from "./IdGenerator";

export const athleteController = new AtheleteController(
    new AthleteBusiness(
        new AthleteDatabase(),
        new IdGenerator()
    )
);

