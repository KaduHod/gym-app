import {dropTables, createTables} from '../migration/main.migration'
import { userSeeder } from './User.seeder'
import { personalSeeder } from './Personal.seeder';
import { alunoSeeder } from './Aluno.seeder';
export async function run(){
    
    console.log('\t - Deletando tabelas')
    await dropTables();
    console.log('\t - Criando tabelas')
    await createTables();
    
    console.log('\t - Adicionando usuários')
    await userSeeder();
    console.log('\t - Adicionando personais')
    await personalSeeder();
    console.log('\t - Adicionando alunos')
    await alunoSeeder();
    console.log('fim')
    process.exit();
}

run();
