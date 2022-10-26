import { AbstracRepository } from "./abstract.repository";
import { User, UserInterface } from "../Models/User.model";
import { AlunoInterface } from "../Models/Aluno.model";

export class AlunoRepository extends AbstracRepository
{
    constructor(){
        super()
    }

    public async create(alunos:AlunoInterface | AlunoInterface[]): Promise<void>
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

}