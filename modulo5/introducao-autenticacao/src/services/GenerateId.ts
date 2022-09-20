import { v4 } from "uuid"

class GenerateId {

    createId(): string {
        return v4();
    }
}

export default GenerateId

