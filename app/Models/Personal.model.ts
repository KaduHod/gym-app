import { UserInterface, User } from "./User.model"
import { Aluno } from "./Aluno.model"
import Database   from "../database/connection";

export interface PersonalInterface {
    id:Number
    user_id:Number
}

export class Personal {
    private repository: typeof Database
    public id:Number | null
    private user_id:Number | null
    
    constructor(personal : PersonalInterface)
    {
        this.id = personal.id ?? null
        this.user_id = personal.user_id ?? null
        this.repository = Database;
    }

    // public id(): Number {
        // return this.id;
    // }

    private user(): User | any
    {
        return this.user_id;
    }

    // public user():User | null 
    // {
        // return this.repository.getUserById(this.userId());
    // }
    // public alunos(): Aluno | any
    // {
        // return this.repository.getAlunosFromPersonal(this.id())
    // }
}