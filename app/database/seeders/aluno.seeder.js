import {alunosFactory} from '../factorys/aluno.factory.js';
import db from '../db.js';

export const alunoSeeder = async (usersId = []) => {
    const alunos = alunosFactory({usersId})
    await db('Alunos').insert(alunos);
    console.log('\t - Alunos inseridos!')
}