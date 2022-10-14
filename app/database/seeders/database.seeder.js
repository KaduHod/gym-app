import { userSeeder } from "./user.seeder.js";
import { exercicioSeeder } from './exercicio.seeder.js';
import { periodizacaoSeeder } from './periodizacao.seeder.js';
import { treinoSeeder } from './treino.seeder.js';
import { alunoSeeder } from './aluno.seeder.js';
import { personalSeeder } from './personal.seeder.js';
import db from '../db.js'

class DatabaseSeeder {
    run = async () => {
        await this.initDatabase();
        await db('Personal').del();
        await db('Alunos').del();
        await db('Users').del();
        await userSeeder();
        const {
            TOTAL_USERS, ALUNO_PER_PERSONAL, TOTAL_PERSONAL,
            TOTAL_ALUNOS, alunosIds, personalIds
        } = await this.config();

        console.log({
            TOTAL_USERS, ALUNO_PER_PERSONAL, 
            TOTAL_PERSONAL, TOTAL_ALUNOS,
            alunosIds, personalIds
        });
        await personalSeeder(personalIds);
        await alunoSeeder(alunosIds);
 
        if((TOTAL_USERS)%ALUNO_PER_PERSONAL !== 0) {
            console.log({len:TOTAL_USERS, ALUNO_PER_PERSONAL})
            console.log('Proporcao de alunos e personal errada')
            return false;
        }
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
        console.log('\t\t - Relação aluno e personal criada!')     
        return true;
    }

    initDatabase = async () => {
        console.log('\t - Reiniciando tabelas...')
        await db.raw(`drop table if exists treino_exercicio`);
        await db.raw(`drop table if exists periodizacao_treino`);
        await db.raw(`drop table if exists personal_aluno`);
        await db.raw(`drop table if exists exercicioDeTreino`);
        await db.raw(`drop table if exists Exercicio`);
        await db.raw(`drop table if exists Treino`);
        await db.raw(`drop table if exists Periodizacao`);
        await db.raw(`drop table if exists Alunos`);
        await db.raw(`drop table if exists Personal`);
        await db.raw(`drop table if exists Users`);

        // await db.raw(`create table Users (
            // id int NOT NULL auto_increment,
            // nickname varchar(30),
            // email varchar(45),
            // password varchar(255),
            // createdAt date,
            // updatedAt date,
            // PRIMARY KEY (ID)
        // );`);

        await db.schema.createTable('Users', (table) => {
            table.increments('id', {primaryKey:true});
            table.string('nickname', 30);
            table.string('email', 45);
            table.string('password', 255);
            table.timestamps();
        });

        // await db.raw(`create table Personal(
            // id int NOT NULL auto_increment,
            // celphone varchar(45),
            // user_id INT,
            // FOREIGN KEY (user_id) REFERENCES Users(id),
            // PRIMARY KEY (id)
        // );`);

        await db.schema.createTable('Personal', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.string('celphone', 30);
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('Users.id');
            table.timestamps();
        });

        // await db.raw(`create table Aluno(
            // id int NOT NULL auto_increment,
            // celphone varchar(45),
            // user_id INT,
            // FOREIGN KEY (user_id) REFERENCES Users(id),
            // PRIMARY KEY (id)
        // );`);

        await db.schema.createTable('Alunos', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.string('celphone', 30);
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('Users.id');
            table.timestamps();
        });

        // await db.raw(`create table personal_aluno (
            // id int NOT NULL auto_increment,
            // personal_id INT,
            // aluno_id INT,
            // FOREIGN KEY (personal_id) REFERENCES Personal(id),
            // FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
            // PRIMARY KEY (id)
        // );`);


        await db.schema.createTable('personal_aluno', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.integer('personal_id').unsigned();
            table.integer('aluno_id').unsigned();
            table.foreign('personal_id').references('Personal.id');
            table.foreign('aluno_id').references('Alunos.id');
        })

        // await db.raw(`create table Periodizacao(
            // id int NOT NULL auto_increment,
            // objetivo varchar(255),
            // description text,
            // begin date,
            // end date,
            // personal_id INT,
            // aluno_id INT,
            // FOREIGN KEY (personal_id) REFERENCES Personal(id),
            // FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
            // PRIMARY KEY (id)
        // );`);


        await db.schema.createTable('Periodizacao', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.string('objetivo', 255);
            table.text('description', 'mediumtext')
            table.date('begin_date');
            table.date('end_date');
            table.integer('personal_id').unsigned();
            table.integer('aluno_id').unsigned();
            table.foreign('personal_id').references('Personal.id');
            table.foreign('aluno_id').references('Alunos.id');
            table.timestamps();
        })

        // await db.raw(`create table Treino(
            // id int NOT NULL auto_increment,
            // objetivo varchar(255),
            // decription text,
            // periodizacao_id INT,
            // personal_id INT,
            // aluno_id INT,
            // FOREIGN KEY (periodizacao_id) REFERENCES Periodizacao(id),
            // FOREIGN KEY (personal_id) REFERENCES Personal(id),
            // FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
            // PRIMARY KEY (id)
        // );`);

        await db.schema.createTable('Treino', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.string('objetivo', 255);
            table.text('description', 'mediumtext')
            table.integer('periodizacao_id').unsigned();
            table.integer('aluno_id').unsigned();
            table.foreign('periodizacao_id').references('Periodizacao.id');
            table.foreign('aluno_id').references('Alunos.id');
            table.timestamps();
        });


        // await db.raw(`create table periodizacao_treino(
            // id int NOT NULL auto_increment,
            // periodizacao_id INT,
            // treino_id INT,
            // FOREIGN KEY (periodizacao_id) REFERENCES Periodizacao(id),
            // FOREIGN KEY (treino_id) REFERENCES Treino(id),
            // PRIMARY KEY (id)
        // );`);

        await db.schema.createTable('periodizacao_treino', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.integer('periodizacao_id').unsigned();
            table.integer('treino_id').unsigned();
            table.foreign('periodizacao_id').references('Periodizacao.id');
            table.foreign('treino_id').references('Treino.id');
        });

        // await db.raw(`create table Exercicio(
            // id int NOT NULL auto_increment,
            // name varchar(45),
            // description text,
            // videoLink varchar(255),
            // PRIMARY KEY (id)
        // );`);

        await db.schema.createTable('Exercicio', (table) => {
            table.increments('id');
            table.primary(['id'])
            table.string('name', 45);
            table.text('description', 'mediumtext')
            table.string('videoLink', 255);
            table.timestamps();
        });

        // await db.raw(`create table exercicioDeTreino(
            // id int NOT NULL auto_increment,
            // reps INT,
            // sets INT,
            // rest varchar(10),
            // description text,
            // exercicio_id INT,
            // FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id),
            // PRIMARY KEY (id)
        // );`);
        
        await db.schema.createTable('exercicioDeTreino', (table) => {
            table.increments('id');
            table.integer('reps');
            table.integer('sets');
            table.string('rest', 20);
            table.primary(['id'])
            table.text('description', 'mediumtext')
            table.string('videoLink', 255);
            table.integer('exercicio_id').unsigned();
            table.foreign('exercicio_id').references('Exercicio.id');
            table.timestamps();
        });

        // await db.raw(`create table treino_exercicio(
            // id int NOT NULL auto_increment,
            // treino_id INT,
            // exercicio_id INT,
            // FOREIGN KEY (treino_id) REFERENCES Treino(id),
            // FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id),
            // PRIMARY KEY (id)
        // );`);

        await db.schema.createTable('treino_exercicio', (table) => {
            table.increments('id');
            table.integer('exercicio_id').unsigned();
            table.foreign('exercicio_id').references('Exercicio.id');
            table.integer('treino_id').unsigned();
            table.foreign('treino_id').references('Treino.id');
        });

        console.log('\t - Tabelas criadas!')
    }
}


const dbSeeder = new DatabaseSeeder();
dbSeeder.run();
