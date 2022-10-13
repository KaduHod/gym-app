import { userSeeder } from "./user.seeder.js";
import { exercicioSeeder } from './exercicio.seeder.js';
import { periodizacaoSeeder } from './periodizacao.seeder.js';
import { treinoSeeder } from './treino.seeder.js';
import { alunoSeeder } from './aluno.seeder.js';
import { personalSeeder } from './personal.seeder.js';
import db from '../db.js'

async function run(){
    await db('Personal').del();
    await db('Aluno').del();
    await db('Users').del();
    await userSeeder();
    const {
        TOTAL_USERS, ALUNO_PER_PERSONAL, TOTAL_PERSONAL,
        TOTAL_ALUNOS, alunosIds, personalIds
    } = await getConfig();
    await personalSeeder(personalIds);
    await alunoSeeder(alunosIds);
    // await exercicioSeeder();
    // await periodizacaoSeeder();
    // await treinoSeeder();
    // await alunoSeeder();
    // await personalSeeder();
}

async function getConfig(){
    const users = await db('Users').select('id');
    const TOTAL_USERS = users.length;
    const ALUNO_PER_PERSONAL = 3;
    const TOTAL_PERSONAL = TOTAL_USERS/ALUNO_PER_PERSONAL;
    const TOTAL_ALUNOS = TOTAL_USERS - TOTAL_PERSONAL;
    const {alunosIds, personalIds} = users.reduce(( acc, curr, index ) => {
        if(index + 1 > TOTAL_PERSONAL){
            acc['alunosIds'].push(curr.id);
        }else{
            acc['personalIds'].push(curr.id);
        }
        return acc;
    }, {alunosIds : [], personalIds: []})
    return {
        TOTAL_USERS,
        ALUNO_PER_PERSONAL,
        TOTAL_PERSONAL,
        TOTAL_ALUNOS,
        alunosIds, 
        personalIds
    }
}

run();