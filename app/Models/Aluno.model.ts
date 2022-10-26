import { User } from "./User.model"
import { AlunoRepository } from "../Repositories/Aluno.repository";
export interface AlunoInterface {
    id: Number | null
    user_id:Number
    personal_id:Number | null
}

export class Aluno {
    private id:Number | null
    private user_id:Number
    private alunoRepository:AlunoRepository
    
    constructor(props : AlunoInterface)
    {
        this.id = props.id
        this.user_id = props.user_id
        this.alunoRepository = new AlunoRepository();
    }
}