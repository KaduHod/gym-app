import db from "../db.js";
export const killTables = async () => {
    console.log('\t - Deletando tabelas tabelas')
    await db.raw(`drop table if exists treino_exercicio`);
    console.log('\t\t - treino_exercicio');
    await db.raw(`drop table if exists periodizacao_treino`);
    console.log('\t\t - periodizacao_treino');
    await db.raw(`drop table if exists personal_aluno`);
    console.log('\t\t - personal_aluno');
    await db.raw(`drop table if exists exercicioDeTreino`);
    console.log('\t\t - exercicioDeTreino');
    await db.raw(`drop table if exists exercicio_agonists_antagonists`);
    console.log('\t\t - exercicio_agonists_antagonists');
    await db.raw(`drop table if exists exercicio_synergists`);
    console.log('\t\t - exercicio_synergists');
    await db.raw(`drop table if exists treino_aluno_personal`);
    console.log('\t\t - treino_aluno_personal');
    await db.raw(`drop table if exists Exercicio`);
    console.log('\t\t - Exercicio');
    await db.raw(`drop table if exists Treino`);
    console.log('\t\t - Treino');
    await db.raw(`drop table if exists Periodizacao`);
    console.log('\t\t - Periodizacao');
    await db.raw(`drop table if exists Alunos`);
    console.log('\t\t - Alunos');
    await db.raw(`drop table if exists Personal`);
    console.log('\t\t - Personal');
    await db.raw(`drop table if exists Users`);
    console.log('\t\t - Users');
    await db.raw(`drop table if exists Muscle`);
    console.log('\t\t - Muscle');
    console.log('\n');
}

//killTables();