import db from "../db.js";
export const createTables = async () => {
    console.log('\t - Criando tabelas')
    await db.schema.createTable('Users', (table) => {
        table.increments('id', {primaryKey:true});
        table.string('nickname', 30);
        table.string('email', 45);
        table.string('password', 255);
        table.timestamps();
    });
    console.log('\t\t - Users!')

    await db.schema.createTable('Personal', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('celphone', 30);
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('Users.id');
        table.timestamps();
    });
    console.log('\t\t - Personal!')
    await db.schema.createTable('Alunos', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('celphone', 30);
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('Users.id');
        table.timestamps();
    });
    console.log('\t\t - Alunos!')
    await db.schema.createTable('personal_aluno', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.integer('personal_id').unsigned();
        table.integer('aluno_id').unsigned();
        table.foreign('personal_id').references('Personal.id');
        table.foreign('aluno_id').references('Alunos.id');
    });
    console.log('\t\t - personal_aluno!')
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
    });
    console.log('\t\t - Periodizacao!')
    await db.schema.createTable('Treino', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('objetivo', 255);
        table.text('description', 'mediumtext')
        table.timestamps();
    });
    console.log('\t\t - Treino!')

    await db.schema.createTable('periodizacao_treino', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.integer('periodizacao_id').unsigned();
        table.integer('treino_id').unsigned();
        table.foreign('periodizacao_id').references('Periodizacao.id');
        table.foreign('treino_id').references('Treino.id');
    });
    console.log('\t\t - periodizacao_treino!')

    await db.schema.createTable('Exercicio', (table) => {
        table.increments('id');
        table.primary(['id']);
        table.string('name', 45);
        table.text('description', 'mediumtext')
        table.string('videoLink', 255);
        table.timestamps();
    });
    console.log('\t\t - Exercicio!');

    await db.schema.createTable('exercicioDeTreino', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.integer('reps');
        table.integer('sets');
        table.string('rest', 20);
        table.text('execução', 'mediumtext')
        table.string('videoLink', 255);
        table.integer('exercicio_id').unsigned();
        table.foreign('exercicio_id').references('Exercicio.id');
        table.integer('treino_id').unsigned();
        table.foreign('treino_id').references('Treino.id');
        table.timestamps();
    });

    console.log('\t\t - exercicioDeTreino!');

    await db.schema.createTable('Muscle', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('name', 45);
        table.string('image', 100);
        table.timestamps();
    });
    console.log('\t\t - Muscle!');

    await db.schema.createTable('exercicio_agonists', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('name', 45);
        table.string('image', 100);
        table.integer('exercicio_id').unsigned();
        table.integer('muscle_id').unsigned();
        table.foreign('exercicio_id').references('Exercicio.id');
        table.foreign('muscle_id').references('Muscle.id');
        table.integer('activation_rate');
        table.timestamps();
    });
    console.log('\t\t - exercicio_agonists!'); 

    await db.schema.createTable('exercicio_antagonists', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('name', 45);
        table.string('image', 100);
        table.integer('exercicio_id').unsigned();
        table.integer('muscle_id').unsigned();
        table.foreign('exercicio_id').references('Exercicio.id');
        table.foreign('muscle_id').references('Muscle.id');
        table.timestamps();
    });
    console.log('\t\t - exercicio_antagonists!');

    await db.schema.createTable('exercicio_synergists', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.string('name', 45);
        table.string('image', 100);
        table.integer('exercicio_id').unsigned();
        table.integer('muscle_id').unsigned();
        table.foreign('exercicio_id').references('Exercicio.id');
        table.foreign('muscle_id').references('Muscle.id');
        table.integer('activation_rate');
        table.timestamps();
    });
    console.log('\t\t - exercicio_synergists!');
    
    console.log('\t\t - treino_exercicio!')
    await db.schema.createTable('treino_exercicio', (table) => {
        table.increments('id');
        table.primary(['id'])
        table.integer('exercicio_id').unsigned();
        table.foreign('exercicio_id').references('Exercicio.id');
        table.integer('treino_id').unsigned();
        table.foreign('treino_id').references('Treino.id');
    });
    console.log('\n')
    /* await db.raw(`create table Users (
            id int NOT NULL auto_increment,
            nickname varchar(30),
            email varchar(45),
            password varchar(255),
            createdAt date,
            updatedAt date,
            PRIMARY KEY (ID)
        );`);

        
        await db.raw(`create table Personal(
            id int NOT NULL auto_increment,
            celphone varchar(45),
            user_id INT,
            FOREIGN KEY (user_id) REFERENCES Users(id),
            PRIMARY KEY (id)
        );`);

                await db.raw(`create table Aluno(
            id int NOT NULL auto_increment,
            celphone varchar(45),
            user_id INT,
            FOREIGN KEY (user_id) REFERENCES Users(id),
            PRIMARY KEY (id)
        );`);

         await db.raw(`create table personal_aluno (
            id int NOT NULL auto_increment,
            personal_id INT,
            aluno_id INT,
            FOREIGN KEY (personal_id) REFERENCES Personal(id),
            FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
            PRIMARY KEY (id)
        );`);

        await db.raw(`create table Periodizacao(
            id int NOT NULL auto_increment,
            objetivo varchar(255),
            description text,
            begin date,
            end date,
            personal_id INT,
            aluno_id INT,
            FOREIGN KEY (personal_id) REFERENCES Personal(id),
            FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
            PRIMARY KEY (id)
        );`);
        
        await db.raw(`create table Treino(
            id int NOT NULL auto_increment,
            objetivo varchar(255),
            decription text,
            periodizacao_id INT,
            personal_id INT,
            aluno_id INT,
            FOREIGN KEY (periodizacao_id) REFERENCES Periodizacao(id),
            FOREIGN KEY (personal_id) REFERENCES Personal(id),
            FOREIGN KEY (aluno_id) REFERENCES Alunos(id),
            PRIMARY KEY (id)
        );`);

        await db.raw(`create table periodizacao_treino(
            id int NOT NULL auto_increment,
            periodizacao_id INT,
            treino_id INT,
            FOREIGN KEY (periodizacao_id) REFERENCES Periodizacao(id),
            FOREIGN KEY (treino_id) REFERENCES Treino(id),
            PRIMARY KEY (id)
        );`);
        
        await db.raw(`create table Exercicio(
            id int NOT NULL auto_increment,
            name varchar(45),
            description text,
            videoLink varchar(255),
            PRIMARY KEY (id)
        );`);

        await db.raw(`create table exercicioDeTreino(
            id int NOT NULL auto_increment,
            reps INT,
            sets INT,
            rest varchar(10),
            description text,
            exercicio_id INT,
            FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id),
            PRIMARY KEY (id)
        );`);

        await db.raw(`create table treino_exercicio(
            id int NOT NULL auto_increment,
            treino_id INT,
            exercicio_id INT,
            FOREIGN KEY (treino_id) REFERENCES Treino(id),
            FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id),
            PRIMARY KEY (id)
        );`); */
}
const run = async () => {
    createTables();
}


// run();