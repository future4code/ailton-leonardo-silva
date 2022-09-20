CREATE TABLE User_Introducao_Autenticacao (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

SELECT * FROM User_Introducao_Autenticacao;

DROP TABLE User_Introducao_Autenticacao;