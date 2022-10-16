import db from '../db.js';
import { muscleFactory } from '../factorys/muslce.factory.js';

export const muscleSeeder = async () => {
    let TOTAL = 30;
    let exercicios = [];
    while(TOTAL > 0){
        exercicios.push(muscleFactory());
        TOTAL--;
    }

    await db('Muscle').insert(exercicios);
    
    console.log('\t\t - Musculos inseridos!')
}