use GymApp;

create table Users (
	id int NOT NULL auto_increment,
    nickname varchar(30),
    email varchar(30),
    password varchar(255),
    createdAt date,
    updatedAt date,
    PRIMARY KEY (ID)
);

create table Personal(
	id int NOT NULL auto_increment,
    celphone varchar(45),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    PRIMARY KEY (id)
);

create table Aluno(
	id int NOT NULL auto_increment,
    celphone varchar(45),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    PRIMARY KEY (id)
);

create table personal_aluno (
	id int NOT NULL auto_increment,
    personal_id INT,
    aluno_id INT,
    FOREIGN KEY (personal_id) REFERENCES Personal(id),
    FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
    PRIMARY KEY (id)
);

create table Periodizacao(
    id int NOT NULL auto_increment,
    objetivo varchar(255),
    description text,
    begin date,
    end date,
    personal_id INT,
    aluno_id INT,
    FOREIGN KEY (personal_id) REFERENCES Personal(id),
    FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
    PRIMARY KEY (id)
);

create table Treino(
    id int NOT NULL auto_increment,
    objetivo varchar(255),
    decription text,
    periodizacao_id INT,
    personal_id INT,
    aluno_id INT,
    FOREIGN KEY (periodizacao_id) REFERENCES Periodizacao(id),
    FOREIGN KEY (personal_id) REFERENCES Personal(id),
    FOREIGN KEY (aluno_id) REFERENCES Aluno(id),
    PRIMARY KEY (id)
);

create table periodizacao_treino(
    id int NOT NULL auto_increment,
    periodizacao_id INT,
    treino_id INT,
    FOREIGN KEY (periodizacao_id) REFERENCES Periodizacao(id),
    FOREIGN KEY (treino_id) REFERENCES Treino(id),
    PRIMARY KEY (id)
);

create table Exercicio(
    id int NOT NULL auto_increment,
    name varchar(45),
    description text,
    videoLink varchar(255),
    PRIMARY KEY (id)
);

create table exercicioDeTreino(
    id int NOT NULL auto_increment,
    reps INT,
    sets INT,
    rest varchar(10),
    description text,
    exercicio_id INT,
    FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id),
    PRIMARY KEY (id)
);

create table treino_exercicio(
    id int NOT NULL auto_increment,
    treino_id INT,
    exercicio_id INT,
    FOREIGN KEY (treino_id) REFERENCES Treino(id),
    FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id),
    PRIMARY KEY (id)
);

