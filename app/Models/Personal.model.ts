import { UserInterface, User } from "./User.model"
import { Aluno } from "./Aluno.model"
import { Database }  from "../database/db";

export interface PersonalInterface {
    id:Number
    user_id:Number
}

export class Personal {
    private props:PersonalInterface;
    private repository: typeof Database
    
    constructor(props : PersonalInterface)
    {
        this.props = props
        this.repository = Database;
    }

    public id(): Number {
        return this.props.id;
    }

    private userId(): Number {
        
        return this.props.user_id;
    }

    public user():User | null 
    {
        return this.repository.getUserById(this.userId());
    }
    public alunos(): Aluno | any
    {
        return this.repository.getAlunosFromPersonal(this.id())
    }
}