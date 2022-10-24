import { Database } from "../database/connection";
import { User } from "./User.model"

export interface AlunoInterface {
    id:Number
    user_id:Number
    personal_id:Number | null
}

export class Aluno {
    private props:AlunoInterface;
    private repository: typeof Database
    
    constructor(props : AlunoInterface)
    {
        this.props = props
        this.repository = Database;
    }

    public id(): Number
    {
        return this.props.id;
    }

    public user_id(): Number
    {
        return this.props.user_id;
    }

    // public user(): User | null
    // {
        // return this.repository.getUserById(this.user_id())
    // }

    public setPersonal(personal_id:Number): void
    {
        this.props.personal_id = personal_id;
    }

    public personalId(): Number | null
    {
        return this.props.personal_id;
    }
}