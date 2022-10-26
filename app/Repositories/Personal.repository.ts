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

    public async getTotalPersonais(): Promise<Number | any>
    {
        const query = await this.db('personais').count('id as total')
        return query[0].total;
    };

    public async deleteAllPersonais():Promise<void>
    {
        await this.db('personais').delete();
    }
    
}