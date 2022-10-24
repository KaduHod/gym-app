import {dropTables, createTables} from '../migration/main.migration'
import { userSeeder } from './User.seeder'
async function run(){
    // console.log('\t - Deletando tabelas')
    // await dropTables();
    // console.log('\t - Criando tabelas')
    // await createTables();
    const users = await userSeeder();
    console.log({users})
}

run()