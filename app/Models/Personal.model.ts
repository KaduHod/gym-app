import { UserInterface, User } from "./User.model"
import { Aluno } from "./Aluno.model"
import { PersonalRepository } from "../Repositories/Personal.repository"

export interface PersonalInterface {
    id: Number | null
    user_id:Number
}

export class Personal {
    private repository:PersonalRepository
    private user_id:Number | null
    private id:Number | null
    
    constructor(personal : PersonalInterface)
    {
        this.id = personal.id
        this.user_id = personal.user_id ?? null
        this.repository = new PersonalRepository();
    }
}