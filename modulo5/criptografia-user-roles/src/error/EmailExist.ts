import { BaseError } from "./BaseError";

export class EmailExist extends BaseError{
    constructor(){
        super("Email ja existe na aplicação",401)
    }
}