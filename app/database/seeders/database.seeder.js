import { userSeeder } from "./user.seeder.js";
import { exercicioSeeder } from './exercicio.seeder.js';
import { muscleSeeder } from "./muscle.seeder.js";
import { periodizacaoSeeder } from './periodizacao.seeder.js';
import { treinoSeeder } from './treino.seeder.js';
import { alunoSeeder } from './aluno.seeder.js';
import { personalSeeder } from './personal.seeder.js';
import { randomNumber } from "../../helpers/numbers.helper.js";
import db from '../db.js'

export class DatabaseSeeder {
    run = async () => {
        // await db('personal_aluno').del();
        // await db('Personal').del();
        // await db('Alunos').del();
        // await db('Users').del();
        console.log('\t - Seeders')

        await userSeeder();
        const {
            TOTAL_USERS, ALUNO_PER_PERSONAL, TOTAL_PERSONAL,
            TOTAL_ALUNOS, alunosIds, personalIds
        } = await this.config();

        // console.log({
            // TOTAL_USERS, ALUNO_PER_PERSONAL, 
            // TOTAL_PERSONAL, TOTAL_ALUNOS,
            // alunosIds, personalIds
        // });
        await personalSeeder(personalIds);
        await alunoSeeder(alunosIds);
 
        if((TOTAL_USERS)%ALUNO_PER_PERSONAL !== 0) {
            console.log({len:TOTAL_USERS, ALUNO_PER_PERSONAL})
            console.log('Proporção de alunos e personal errada')
            return false;
        }

        
        await exercicioSeeder();
        await muscleSeeder();
        console.log('\n')

        console.log('\t - Relacionando dados')

        await this.AlunoPersonalRelation({personalIds});

        // await exercicioSeeder();
        // await periodizacaoSeeder();
        // await treinoSeeder();
        
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
        console.log('\t\t - Aluno e personal!')     
        return true;
    }

    exerciciosAgonistsRelation = async ({exercicios, muscles}) => {
        console.log('\t - Criando agonistas de cada exercicio')
        // criar dois registro na tabela de agonistas
        for await (const exercicio of exercicios){

        }
    }

    exerciciosAntagonistsRelation = async ({exercicios, muscles}) => {
        console.log('\t - Criando agonistas de cada exercicio')
        // criar dois registro na tabela de agonistas
        for await (const exercicio of exercicios){

        }
    }

    exerciciosSynergistsRelation = async ({exercicios, muscles}) => {
        console.log('\t - Criando agonistas de cada exercicio')
        // criar dois registro na tabela de agonistas
        for await (const exercicio of exercicios){

        }
    }
}


// const dbSeeder = new DatabaseSeeder();
// dbSeeder.run();
