#Esta tabela será usada para criar um atleta
CREATE TABLE CASE_EstanteVirtual_Atletas(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE,
	country VARCHAR(255) NOT NULL
);
#Esta tabela será para criar uma competição.        
CREATE TABLE CASE_EstanteVirtual_Competicoes (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	contest VARCHAR(255) NOT NULL,
    unit ENUM('M' , 'S') NOT NULL,
    status ENUM('ABERTA', 'INICIADA', 'ENCERRADA') DEFAULT ('ABERTA') NOT NULL
);
# Esta tabela será a junção das tabelas e o resultado do atleta
CREATE TABLE CASE_EstanteVirtual_Atletas_Competicoes (
	athlete_id VARCHAR(255),
		FOREIGN KEY (athlete_id) REFERENCES CASE_EstanteVirtual_Atletas(id),
	contest_id VARCHAR(255),
		FOREIGN KEY (contests_id) REFERENCES CASE_EstanteVirtual_Competicoes(id),
	value FLOAT,
    try SMALLINT(1)
);

drop table CASE_EstanteVirtual_Competicoes