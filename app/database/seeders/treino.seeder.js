import { treinoFactory } from '../factorys/treino.factory.js';
import { AlunoRepository } from '../../repository/Aluno.repository.js';
import db from '../db.js';

export const treinoSeeder = async () => {
    const alunoRepo = new AlunoRepository();
    let totalTreinos = await alunoRepo.quantityOfRegisters() * 4;
    let treinos = [];
    while (totalTreinos > 0) { 
        treinos.push(treinoFactory());
        totalTreinos--;
    }
    await db('treino').insert(treinos);

    console.log('\t\t - Treinos inseridos!')
}

const relationTreinoPersonalAluno = async () => {
    const treinos = await db('treino').select('id');
    const alunos = await db('alunos').select('id');
    const personais = await db('personal').select('id');    
}

relationTreinoPersonalAluno();