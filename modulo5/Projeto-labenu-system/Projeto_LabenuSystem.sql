CREATE TABLE Turma (
	id VARCHAR (255) NOT NULL UNIQUE PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_inicio VARCHAR(255) NOT NULL,
    data_termino VARCHAR(255) NOT NULL,
    modulo VARCHAR(255) DEFAULT(0)
);

CREATE TABLE Estudante (
	id VARCHAR (255) NOT NULL UNIQUE PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nascimento VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    turma_id VARCHAR(255),
		FOREIGN KEY (turma_id) REFERENCES Turma(id)
);

CREATE TABLE Docente (
	id VARCHAR (255) NOT NULL UNIQUE PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nascimento VARCHAR(255) NOT NULL,
    turma_id VARCHAR(255),
		FOREIGN KEY (turma_id) REFERENCES Turma(id)
);

SELECT * FROM Turma;

SELECT * FROM Estudante;

SELECT * FROM Docente;