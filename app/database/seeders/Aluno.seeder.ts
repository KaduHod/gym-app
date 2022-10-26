import { Aluno, AlunoInterface } from "../../Models/Aluno.model";
import {AlunoRepository} from '../../Repositories/Aluno.repository';
import { PersonalRepository } from "../../Repositories/Personal.repository";
import { UserRepository } from "../../Repositories/User.repository";

export async function alunoSeeder():Promise<void>
{
    const userRepo = new UserRepository();
    const personaisRepo = new PersonalRepository();
    const alunoRepo = new AlunoRepository();
    await alunoRepo.db('alunos').delete();
    const user_ids = await personaisRepo.db('personais').select('user_id');
    const userToBecomeAlunos = await userRepo.db('users').select('id').whereNotIn('id', user_ids.map( ({user_id}:any) => user_id) );
    const aluno_user_ids:AlunoInterface[] = userToBecomeAlunos.map(({id}) => ({user_id:id}));
    await alunoRepo.create(aluno_user_ids);
    
}