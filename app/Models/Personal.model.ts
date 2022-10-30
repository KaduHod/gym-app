import { UserInterface, User } from "./User.model"
import { Aluno } from "./Aluno.model"
import { PersonalRepository } from "../Repositories/Personal.repository"

export interface PersonalInterface {
    id: Number | null
    user_id:Number
}

export class Personal {
    public repository:PersonalRepository
    public user_id:Number | null
    public id:Number | null
    
    constructor(personal : PersonalInterface)
    {
        this.id = personal.id
        this.user_id = personal.user_id ?? null
        this.repository = new PersonalRepository();
    }

    public async addAluno(aluno:Aluno): Promise<boolean>
    {
        const verify = await this.repository.attachPersonalToAluno({personal:this, aluno: aluno});
        return verify
    }

    public async removeAluno(aluno:Aluno): Promise<boolean>
    {
        const verify = await this
                                .repository
                                .dettachPersonalToAluno({personal:this, aluno: aluno});
                                
        return verify
    }

    public async alunos(): Promise<Aluno[]>
    {
        return await this.repository.getAlunosFromPersonal( this )
    }


}