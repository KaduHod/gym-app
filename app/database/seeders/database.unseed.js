import db from "../db.js";
const killTables = async () => {
    console.log('\t - Deletando tabelas tabelas...')
    await db.raw(`drop table if exists treino_exercicio`);
    await db.raw(`drop table if exists periodizacao_treino`);
    await db.raw(`drop table if exists personal_aluno`);
    await db.raw(`drop table if exists exercicioDeTreino`);
    await db.raw(`drop table if exists Exercicio`);
    await db.raw(`drop table if exists Treino`);
    await db.raw(`drop table if exists Periodizacao`);
    await db.raw(`drop table if exists Aluno`);
    await db.raw(`drop table if exists Personal`);
    await db.raw(`drop table if exists Users`);
    console.log('\t - Tabelas deletadas');
}

killTables();