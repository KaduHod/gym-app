import { AbstracRepository } from "./abstract.repository";
import { User, UserInterface } from "../Models/User.model";
import { AlunoInterface, Aluno } from "../Models/Aluno.model";
import { Personal } from "../Models/Personal.model";
import { attachPersonalToAlunoInterface } from "../interfaces";

export class AlunoRepository extends AbstracRepository
{
    constructor(){
        super()
    }

    public async create(alunos:any): Promise<void>
    {
        await this.db('alunos').insert(alunos);
    }

    public async getAllAlunos(): Promise<any>
    {
        return await this.db('alunos');
    }

    public async getTotal(): Promise<Number | any>
    {
        const query = await this.db('alunos').count('id as total');
        return query[0].total;
    }

    public async first(): Promise<Aluno>
    {
        return new Aluno(await this.db('alunos').first());
    }

    public async getUser(aluno:Aluno): Promise<User>
    {
        return await this.db('users')
                        .where({id: aluno.user_id})
                        .first();
    }

    public async attachAlunoToPersonal({aluno, personal}:attachPersonalToAlunoInterface): Promise<boolean>
    {
        try {
            const alreadyAttach = await this.db('personal_aluno')
                                            .where({
                                                aluno_id : aluno.id,
                                                personal_id: personal.id
                                            })
                                            .first();
            if(alreadyAttach) return true;

            await this.db('personal_aluno')
                    .insert({
                        aluno_id : aluno.id,
                        personal_id: personal.id
                    });
            return true
        } catch (error) {
            console.log({error})
            return false;
        }
    }

    public async getPersonalFromAluno(aluno:Aluno) : Promise<Personal | boolean>
    {
        try {

            const personal = await this.db('personais')
                                        .select('personais.*') 
                                        .innerJoin('personal_aluno','personal_aluno.personal_id','personais.id')
                                        .where({
                                            'personal_aluno.aluno_id' : aluno.id
                                        }).first(); 
            return new Personal(personal);
        } catch (error) {
            console.log({error})
            return false;
        }
    }

}