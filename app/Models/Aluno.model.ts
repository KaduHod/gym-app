import { User } from "./User.model"
import { AlunoRepository } from "../Repositories/Aluno.repository";
import { Personal } from "./Personal.model";
export interface AlunoInterface {
    id: Number | null
    user_id:Number
    personal_id:Number | null
}

export class Aluno {
    public id:Number | null
    public user_id:Number
    public alunoRepository:AlunoRepository
    
    constructor(props : AlunoInterface)
    {
        this.id = props.id
        this.user_id = props.user_id
        this.alunoRepository = new AlunoRepository();
    }
    public async user(): Promise<User>
    {
        return await this.alunoRepository.getUser(this);
    }

    public async addPersonal(personal:Personal): Promise<boolean>
    {
        return await this
                        .alunoRepository
                        .attachAlunoToPersonal({aluno:this, personal});
    }

    public async personal(): Promise<Personal | boolean>
    {
        return await this   
                        .alunoRepository
                        .getPersonalFromAluno(this);
    }

    public async removePersonal(personal:Personal): Promise<boolean>
    {
        return await this
                        .alunoRepository
                        .dettachAlunoFromPersonal({aluno:this, personal});
    }
}