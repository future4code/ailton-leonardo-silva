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
		FOREIGN KEY (contest_id) REFERENCES CASE_EstanteVirtual_Competicoes(id),
	value FLOAT,
    trynumber ENUM('0' , '1' , '2' , '3') DEFAULT ('0') NOT NULL
);

SELECT * FROM CASE_EstanteVirtual_Atletas_Competicoes
INNER JOIN CASE_EstanteVirtual_Atletas ON CASE_EstanteVirtual_Atletas.id = CASE_EstanteVirtual_Atletas_Competicoes.athlete_id
INNER JOIN CASE_EstanteVirtual_Competicoes ON CASE_EstanteVirtual_Competicoes.id = CASE_EstanteVirtual_Atletas_Competicoes.contest_id
WHERE CASE_EstanteVirtual_Atletas_Competicoes.contest_id = '5a328004-872b-4ea1-8d3a-cfa37d132874'
ORDER BY value ASC;

SELECT athlete_id, contest_id, MAX(value), name, country, contest, unit, status FROM CASE_EstanteVirtual_Atletas_Competicoes
INNER JOIN CASE_EstanteVirtual_Atletas ON CASE_EstanteVirtual_Atletas.id = CASE_EstanteVirtual_Atletas_Competicoes.athlete_id
INNER JOIN CASE_EstanteVirtual_Competicoes ON CASE_EstanteVirtual_Competicoes.id = CASE_EstanteVirtual_Atletas_Competicoes.contest_id
WHERE CASE_EstanteVirtual_Atletas_Competicoes.contest_id = '5a328004-872b-4ea1-8d3a-cfa37d132874'
GROUP BY CASE_EstanteVirtual_Atletas_Competicoes.athlete_id;
#ORDER BY value ASC;






drop table CASE_EstanteVirtual_Atletas_Competicoes;