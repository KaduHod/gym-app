import { AbstracRepository } from "./abstract.repository";
import { PersonalInterface } from "../Models/Personal.model";

export class PersonalRepository extends AbstracRepository {
    constructor(){
        super()
    }

    public async create(values:PersonalInterface[] | PersonalInterface): Promise<void>
    {
        return await this
                        .db('personais')
                        .insert(values)
    }
}