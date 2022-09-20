import { BaseError } from "./BaseError";

export class MissingFields extends BaseError{
    constructor(){
        super("Valores devem ser passados",404)
    }
}