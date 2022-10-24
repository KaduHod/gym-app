import {createTables} from '../migration/main.migration'
async function run(){
    console.log('\t - Criando tabelas')
    await createTables();

    
}

run()