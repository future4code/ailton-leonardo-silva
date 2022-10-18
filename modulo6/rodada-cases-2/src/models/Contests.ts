export enum CONTEST_STATUS {
  ABERTA = "ABERTA",
  INICIADA = "INICIADA",
  ENCERRADA = "ENCERRADA"
}

export enum CONTEST_UNIT {
    S = "S",
    M = "M"
}

export interface IContestDB {
    id: string,
    contest: string,
    unit: CONTEST_UNIT,
    status: CONTEST_STATUS
}

export interface IUpdateDB {
    status: CONTEST_STATUS
}

export interface IUpdateDBDTO extends IUpdateDB {
    id: string
}

export class Contest {
    constructor(
        private id: string,
        private contest: string,
        private unit: CONTEST_UNIT,
        private status: CONTEST_STATUS
    ) {}

    public getId = () => {
        return this.id
    }

    public getContest = () => {
        return this.contest
    }

    public getUnit = () => {
        return this.unit
    }

    public getStatus = () => {
        return this.status
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContest = (newContest: string) => {
        this.contest = newContest
    }

    public setUnit = (newUnit: CONTEST_UNIT) => {
        this.unit = newUnit
    }

    public setStatus = (newStatus: CONTEST_STATUS) => {
        this.status = newStatus
    }
}

export class ContestUpdate {
    constructor(
        private id: string,
        private status: CONTEST_STATUS
    ) {}

    public getId = () => {
        return this.id
    }

    public getStatus = () => {
        return this.status
    }
}

export interface ISignupInputDTO {
    contest: string,
    unit: CONTEST_UNIT,
    status?: CONTEST_STATUS
}

export interface ISignupOutputDTO {
    message: string,
    contest: string
}

export interface IUpdateOutputDTO {
    message: string,
    status: CONTEST_STATUS
}