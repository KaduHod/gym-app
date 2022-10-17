import { userSeeder } from "./user.seeder.js";
import { exercicioSeeder } from './exercicio.seeder.js';
import { muscleSeeder } from "./muscle.seeder.js";
import { periodizacaoSeeder } from './periodizacao.seeder.js';
import { treinoSeeder } from './treino.seeder.js';
import { alunoSeeder } from './aluno.seeder.js';
import { personalSeeder } from './personal.seeder.js';
import { randomNumber } from "../../helpers/numbers.helper.js";
import * as arrays from '../../helpers/arrays.helper.js'
import db from '../db.js'

export class DatabaseSeeder {
    run = async () => {
        console.log('\t - Seeders')
        await userSeeder();
        const {
            TOTAL_USERS, ALUNO_PER_PERSONAL, TOTAL_PERSONAL,
            TOTAL_ALUNOS, alunosIds, personalIds
        } = await this.config();
        await personalSeeder(personalIds);
        await alunoSeeder(alunosIds);
 
        if((TOTAL_USERS)%ALUNO_PER_PERSONAL !== 0) {
            console.log({len:TOTAL_USERS, ALUNO_PER_PERSONAL})
            console.log('Proporção de alunos e personal errada')
            return false;
        }

        await exercicioSeeder();
        await muscleSeeder();
        await treinoSeeder();
        

        await this.relationMuscleAntagonists();
        await this.relationExerciciosMuscle();
        await this.AlunoPersonalRelation({personalIds});
        
        console.log('\n')

        // console.log('\t - Relacionando dados')

        

        // await periodizacaoSeeder();
        
        
    }
 
    config = async () => {
        const users = await db('Users').select('id');
        const TOTAL_USERS = users.length;
        const ALUNO_PER_PERSONAL = 3;
        const TOTAL_PERSONAL = TOTAL_USERS/ALUNO_PER_PERSONAL;
        const TOTAL_ALUNOS = TOTAL_USERS - TOTAL_PERSONAL;
        
        const {alunosIds, personalIds} = users.reduce(( acc, curr, index ) => {
            if(index + 1 > TOTAL_PERSONAL) acc['alunosIds'].push(curr.id);
            else acc['personalIds'].push(curr.id);
            return acc;
        }, {alunosIds : [], personalIds: []})

        return {
            TOTAL_USERS,
            ALUNO_PER_PERSONAL,
            TOTAL_PERSONAL,
            TOTAL_ALUNOS,
            alunosIds, 
            personalIds
        }
    }

    relationExerciciosMuscle = async () => {
        const muscles = await db('Muscle');
        const exercicios = await db('Exercicio');

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
        console.log('\t\t - Exercicio agonistas, atangonistas e sinergistas realcionados!')
    }

    relationMuscleAntagonists = async () => {
        const muscles = await db('muscle');
        let qtdMuscles = muscles.length;
        let relationArr = [];
        
        for (let cont = 0; cont < qtdMuscles; cont++){
            if(cont%2 != 0){
                relationArr.push({
                    one : muscles[cont - 1].id,
                    two : muscles[cont].id
                });
            }
        }
    
        for await (const {one, two} of relationArr){
            await db('muscle')
                    .update('antagonist_id', two)
                    .where('muscle.id', one)

            await db('muscle')
                    .update('antagonist_id', one)
                    .where('muscle.id', two)
        }
        console.log('\t\t - Musculos antagonistas relacionados')
    }

    AlunoPersonalRelation = async ({personalIds}) => {
    
        for await (const personal_id of personalIds){
            const aluno_ids = [
                personal_id * 2 -1, 
                personal_id * 2
            ];
            await db('personal_aluno').insert(
                aluno_ids.map( aluno_id => {
                    return {aluno_id, personal_id};
                })
            );            
        }
        console.log('\t\t - Aluno e personal relacionados!')     
        return true;
    }
}


// const dbSeeder = new DatabaseSeeder();
// dbSeeder.run();
