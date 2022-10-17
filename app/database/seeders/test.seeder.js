import db from '../db.js';
import { randomNumber } from '../../helpers/numbers.helper.js';



const relationExerciciosMuscle = async ({exercicios, muscles}) => {
    for await (const exercicio of exercicios){
        const qtdAgonsits = randomNumber({
            range: 3,
            min: 1
        });
        const qtdSynergists = randomNumber({
            range:5,
            min:3
        });
        const qtdMuscles = (qtdAgonsits * 2) + qtdSynergists;
        const randomMuscles = muscles.randomElements({qtd : qtdMuscles});
        const {agonists_antagonists, synergists } = randomMuscles.reduce((acc, {id, antagonist_id}, index) => {
            if(index < qtdAgonsits){
                acc.agonists_antagonists.push({
                    exercicio_id : exercicio.id,
                    agonist_id: id,
                    antagonist_id
                })
                return acc
            }
            acc.synergists.push({
                exercicio_id : exercicio.id, 
                muscle_id: id
            })
            return acc
        }, {
            agonists_antagonists : [],
            synergists : []
        });
        await db('exercicio_agonists_antagonists').insert(agonists_antagonists);
        await db('exercicio_synergists').insert(synergists);
    }
}

export const test = async () => {
    
    
    await relationExerciciosMuscle({exercicios, muscles});
    // muscles.forEach(msucle => {
        // console.log({msucle})
    // });

}

test();