import db from '../db.js';
import { randomNumber } from '../../helpers/numbers.helper.js';
import * as arrays from '../../helpers/arrays.helper.js'


const relationExerciciosMuscle = async ({exercicios, muscles}) => {
    for await (const exercicio of exercicios){
        const qtdAgonsitsEAntagonists = randomNumber({
            range: 3,
            min: 1
        });
        const qtdSynergists = randomNumber({
            range:5,
            min:3
        });
        // console.log({
            // qtdAgonsitsEAntagonists, qtdSynergists
        // })
        const qtdMuscles = (qtdAgonsitsEAntagonists * 2) + qtdSynergists;
        const randomMuscles = muscles.randomElements({qtd : qtdMuscles});

        const {agonists, antagonists, synergists } = randomMuscles.reduce((acc, {id}, index) => {
            if(index < qtdAgonsitsEAntagonists){
                acc.agonists.push({
                    exercicio_id:id,
                    muscle_id:exercicio.id
                })
                return acc
            }
            if(index < qtdAgonsitsEAntagonists * 2){
                acc.antagonists.push({
                    exercicio_id:id, 
                    muscle_id:exercicio.id
                })
                return acc
            }
            acc.synergists.push({
                exercicio_id:id, 
                muscle_id:exercicio.id
            })
            return acc
        }, {
            agonists : [],
            antagonists : [],
            synergists : []
        });

        await db('exercicio_agonists').insert(agonists);
        await db('exercicio_antagonists').insert(antagonists);
        await db('exercicio_synergists').insert(synergists);
    }
    
    console.log('Relações criadas')
}

export const test = async () => {
    const muscles = await db('Muscle');
    const exercicios = await db('Exercicio');
    
    relationExerciciosMuscle({exercicios, muscles});
}

test();