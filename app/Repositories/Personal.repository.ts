import { AbstracRepository } from "./abstract.repository";
import { PersonalInterface, Personal } from "../Models/Personal.model";
import { attachPersonalToAlunoInterface } from "../interfaces";
import { Aluno } from "../Models/Aluno.model";


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
    public async first(): Promise<Personal>
    {
        return new Personal( await this.db('personais').first() );
    }

    public async attachPersonalToAluno({personal, aluno}:attachPersonalToAlunoInterface) : Promise<boolean>
    {
        try {
            const verifyIfIsAlreadyAttach = await this.db('personal_aluno')
                                                .where({
                                                    personal_id: personal.id,
                                                    aluno_id: aluno.id
                                                }).first()
                                                
            if(verifyIfIsAlreadyAttach) return true;

            await this.db('personal_aluno')
                    .insert({
                        personal_id: personal.id,
                        aluno_id: aluno.id
                    });
            return true
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    public async dettachPersonalToAluno({personal, aluno}:attachPersonalToAlunoInterface) : Promise<any>
    {
        try {
            return await this.db('personal_aluno')
                                            .where({
                                                personal_id: personal.id,
                                                aluno_id: aluno.id
                                            })
                                            .delete();

        } catch (error) {
            console.log(error)
            return false;
        }
    }

    public async getAlunosFromPersonal(personal:Personal): Promise<Aluno[]>
    {
        const alunos = await this.db('alunos')
                                .select('alunos.*') 
                                .innerJoin('personal_aluno','aluno_id','alunos.id')
                                .where({'personal_aluno.personal_id':personal.id});
        
        return alunos.map( alunoDB => new Aluno(alunoDB))
    }
    
}