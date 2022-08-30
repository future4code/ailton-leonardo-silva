-- Criando uma tabela no MySql
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
-- 1A) VARCHAR(255) - declaração de string de até 255 caracteres.
-- NOT NULL, exige o preenchimento do campo, não aceitando vazio.
-- PRIMARY KEY - Chave de identificação.
-- 1B) SHOW DATABASES e SHOW TABLES, mostra os bancos de dados
-- e as tabelas em cada um deles.
SHOW DATABASES;
SHOW TABLES;
-- 1C) DESCRIBE. mostra os detalhes da configuração da tabela, ou seja, as suas propriedades.
DESCRIBE Actor;

-- 2)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
-- 2A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);
-- 2B) Error Code 1602, Duplicate Entry '002' for Key 'PRIMARY'
-- Erro gerado ao tentar repetir uma chave primária já existente.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Fernanda Montenegro",
  500000,
  "1929-10-16", 
  "female"
);
-- 2C) Erro 1136, não informado as colunas obrigatória na declaração.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- 2D) Erro 1364, não foi inserido os dados do nome.
INSERT INTO Actor (id, name ,salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
-- 2E) Erro 1292, a data de nascimento foi passada como número em vez de string.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
-- 2F) Crie mais um ator e atriz
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Chris Hemsworth",
  719333.33,
  "1983-08-11", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Tom Hiddleston",
  719333.33,
  "1981-02-09", 
  "male"
);

-- 3)
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
-- 3A)
SELECT * from Actor WHERE gender = "female";
-- 3B)
SELECT salary from Actor WHERE name = "Tony Ramos";
-- 3C) Os únicos valores de gender no DB, são male ou female então ele não encontrou nenhum resultado.
SELECT * from Actor WHERE gender = "invalid"; 
-- 3D)
SELECT id, name, salary from Actor WHERE salary > 500000;
-- 3E) Erro 1054, não reconheceu a coluna nome, porque ela não existe. A coluna se chama name.
SELECT id, name from Actor WHERE id = "002";
-- 4)
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- 4A) Pegar todos os dados da tabela Actor, que satisfaçam as condições estabelecidas de busca.
-- 4B)
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 300000;
-- 4C)
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";
-- 4D)
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

-- 5)Criando a tabela filmes no MySql 
-- 5A)
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    synopsis VARCHAR (255) NOT NULL,
    release_Date DATE NOT NULL,
    rating INT(2) NOT NULL
);
-- 5B)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
    "2006-01-06",
    7
);
-- 5C)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
    10
);
-- 5D)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
    8
);
-- 5E)
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

-- 6A)
SELECT id, title, rating FROM Movie
WHERE id LIKE "003";
-- 6B)
SELECT * FROM Movie
WHERE title LIKE "Deus%";
-- 6C) Busca todos os filmes com notas superiores a 7.
SELECT id, title, synopsis FROM Movie
WHERE rating > 7;

-- 7A) Palavra "vida" - sem títulos com essa busca
SELECT * FROM Movie
WHERE title like "%vida%";
-- 7B) Palavra "flor" - Procurando nos títulos, a string da pesquisa.
SELECT * FROM Movie
WHERE title like "%flor%";
-- 7C) Todos os filmes já lançados - Todos já lançados, nessa pesquisa)
SELECT * FROM Movie
WHERE release_date < "2022-08-22";
-- 7D) Com a busca, só encontra "Deus é brasileiro"
SELECT * FROM Movie
WHERE (release_date < "2022-08-22") AND (title LIKE "%deus" OR synopsis LIKE "%deus%") AND rating > 7;