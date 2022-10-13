import { userSeeder } from "./user.seeder.js";
import { exercicioSeeder } from './exercicio.seeder.js';
import { periodizacaoSeeder } from './periodizacao.seeder.js';
import { treinoSeeder } from './treino.seeder.js';
import { alunoSeeder } from './aluno.seeder.js';
import { personalSeeder } from './personal.seeder.js';

async function run(){
    await userSeeder();
    await exercicioSeeder();
    await periodizacaoSeeder();
    await treinoSeeder();
    await alunoSeeder();
    await personalSeeder();
}

run();