import db from '../db.js';
import { exercicioFactory } from '../factorys/exercicio.factory.js';

export const exercicioSeeder = async () => {
    let TOTAL = 30;
    let exercicios = [];
    while(TOTAL > 0){
        exercicios.push(exercicioFactory());
        TOTAL--;
    }
    await db('Exercicio').insert(exercicios);
    console.log('\t\t - Exercícios inseridos!')
}