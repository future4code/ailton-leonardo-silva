export enum RESULTS_TRY {
    ZERO = "0",
    ONE = "1",
    TWO = "2",
    THREE = "3"
}
export interface IResultDB {
    athlete_id: string,
    contest_id: string,
    value: number,
    trynumber?: RESULTS_TRY
}

export class Result {
    constructor(
        private athlete_id: string,
        private contest_id: string,
        private value: number,
        private trynumber?: RESULTS_TRY
    ) {}

    public getAthlete_id = () => {
        return this.athlete_id
    }

    public getContest_id = () => {
        return this.contest_id
    }

    public getValue = () => {
        return this.value
    }

    public getTrynumber = () => {
        return this.trynumber
    }

    public setAthlete_id = (newAthlete_id: string) => {
        this.athlete_id = newAthlete_id
    }

    public setContest_id = (newContest_id: string) => {
        this.contest_id = newContest_id
    }

    public setValue = (newValue: number) => {
        this.value = newValue
    }

    public setTrynumber = (newTrynumber: RESULTS_TRY) => {
        this.trynumber = newTrynumber
    }
}

export interface IResultInputDTO {
    athlete_id: string,
    contest_id: string,
    value: number,
    trynumber: RESULTS_TRY
}

export interface IResultOutputDTO {
    message: string,
}