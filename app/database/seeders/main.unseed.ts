import {dropTables} from '../migration/main.migration'
async function run(){
    console.log('\t - Deletando tabelas')
    await dropTables();
}

run()