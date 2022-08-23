-- Desativando a proteção do banco de dados
SET SQL_SAFE_UPDATES = 0;

-- Exercício 1)
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
-- Criando mais uma coluna na Tabela
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
-- 1A) ALTER TABLE Actor DROP COLUMN salary;
-- Com esse comando vai derrubar a coluna salário
-- 1B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
-- Está definindo um ENUM "sex" para a coluna gender.
-- 1C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
-- Está mudando o tamanho da coluna para string 255 caracteres
-- 1D) Mudou o tamanho da string para 100 e agora pode ser nulo.
ALTER TABLE Actor CHANGE gender gender VARCHAR(100); 

-- Exercício 2
-- 2A)
UPDATE Actor
SET name = "Moacyr Franco",	birth_date = "1936-10-05"
WHERE id = "003";
-- 2B)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- 2C)
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "1936-10-05",
salary = 600000,
gender = "male"
WHERE id = "005";
-- 2D) Tentando atualizar em um id não existente.
-- Ele não deu erro, mas não atualiza nada porque não encontrou o Id.
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "1936-10-05",
salary = 600000,
gender = "male"
WHERE id = "010";

-- Exercício 3)
-- 3A)
DELETE FROM Actor WHERE name = "Fernanda Montenegro"; -- Erro
-- 3B)
DELETE FROM Actor WHERE gender ="male" and salary > 1000000;

-- Exercício 4)
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;
-- 4A)
SELECT MAX(salary) FROM Actor;
-- 4B)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
-- 4C)
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- 4D)
SELECT SUM(salary) FROM Actor;

-- Exercício 5)
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name ASC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;
-- 5A) Faz um agrupamento, por sexo, e uma contagem de quantos atores masculinos e femininos.
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- 5B)
SELECT id, name FROM Actor
ORDER BY name DESC;
-- 5C)
SELECT * FROM Actor
ORDER BY salary;
-- 5D)
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;
-- 5E) O interessante de pedir as colunas salário e gender foi para facilitar a visualização e entendimento.
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- Exercício 6)
-- 6A) Criando mais uma coluna na Tabela
ALTER TABLE Movie ADD playing_limit_dateMovie DATE;
-- 6B) Alterar o valor de rating
ALTER TABLE Movie CHANGE rating rating FLOAT;
-- 6C) Atualize 2 filmes
UPDATE Movie
SET playing_limit_dateMovie = "2022-10-01"
WHERE id = "002";
UPDATE Movie
SET playing_limit_dateMovie = "2022-05-01"
WHERE id = "003";

-- 6D) Deletar um filme pela Id
DELETE FROM Movie WHERE id = "001";
UPDATE Movie -- Não dá erro, e não altera nada, porque o filme já havia sido deletado.
SET synopsis="Teste"
WHERE id = "001";

-- DESAFIOS
-- Exercício 7)
-- 7A)
SELECT count(*) FROM Movie
WHERE rating > 7.5;
-- 7B)
SELECT AVG(rating) FROM Movie;
-- 7C)
SELECT count(*) FROM Movie
WHERE playing_limit_dateMovie > CURDATE();
-- 7D)
SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();
-- 7E)
SELECT MAX(rating) FROM Movie;
-- 7F)
SELECT MIN(rating) FROM Movie; 

-- Exercício 8)
-- 8A)
SELECT * FROM Movie
ORDER BY title;
-- 8B)
SELECT * FROM Movie
ORDER BY title DESC LIMIT 5;
-- 8C) 
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC LIMIT 3;
