export interface IAthleteDB {
    id: string,
    name: string,
    country: string,
}

export class Athelete {
    constructor(
        private id: string,
        private name: string,
        private country: string
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getCountry = () => {
        return this.country
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setCountry = (newCountry: string) => {
        this.country = newCountry
    }
}

export interface ISignupInputDTO {
    name: string,
    country: string
}

export interface ISignupOutputDTO {
    message: string,
    name: string
}