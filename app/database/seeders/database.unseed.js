import db from "../db.js";
export const killTables = async () => {
    console.log('\t - Deletando tabelas tabelas...')
    await db.raw(`drop table if exists treino_exercicio`);
    await db.raw(`drop table if exists periodizacao_treino`);
    await db.raw(`drop table if exists personal_aluno`);
    await db.raw(`drop table if exists exercicioDeTreino`);
    await db.raw(`drop table if exists exercicio_agonists`);
    await db.raw(`drop table if exists exercicio_synergists`);
    await db.raw(`drop table if exists exercicio_antagonists`);
    await db.raw(`drop table if exists Exercicio`);
    await db.raw(`drop table if exists Treino`);
    await db.raw(`drop table if exists Periodizacao`);
    await db.raw(`drop table if exists Alunos`);
    await db.raw(`drop table if exists Personal`);
    await db.raw(`drop table if exists Users`);
    await db.raw(`drop table if exists Muscle`);
    console.log('\t - Tabelas deletadas\n');
}

//killTables();