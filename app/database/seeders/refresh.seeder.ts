import {dropTables, createTables} from '../migration/main.migration'
import { userSeeder } from './User.seeder'
import { personalSeeder } from './Personal.seeder';
export async function run(){
    
    console.log('\t - Deletando tabelas')
    await dropTables();
    console.log('\t - Criando tabelas')
    await createTables();
    
    console.log('\t - Adicionando usuários')
    await userSeeder();
    console.log('\t - Adicionando personais')
    await personalSeeder();
    console.log('fim')
    process.exit();
}

run();
