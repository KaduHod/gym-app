import { Aluno, AlunoInterface } from "../../Models/Aluno.model";
import {AlunoRepository} from '../../Repositories/Aluno.repository';
import { PersonalRepository } from "../../Repositories/Personal.repository";
import { UserRepository } from "../../Repositories/User.repository";

export async function alunoSeeder():Promise<void>
{
    const userRepo = new UserRepository();
    const personaisRepo = new PersonalRepository();
    const alunoRepo = new AlunoRepository();
    const personais = await personaisRepo.db('personais').select('user_id');
    const personaisIds = personais.map( ({user_id}) => user_id );
    
    const userToBecomeAlunos = await userRepo.db('users').select('id').whereNotIn('id', personaisIds );
    
    const aluno_user_ids = userToBecomeAlunos.map(({id}) => ({user_id:id}));
    // console.log(aluno_user_ids)
    await alunoRepo.create(aluno_user_ids);
    
}