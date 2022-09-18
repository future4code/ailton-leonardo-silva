CREATE TABLE Users_Projeto_Cookenu (
id VARCHAR(255) NOT NULL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
role ENUM('NORMAL' , 'ADMIN') NOT NULL DEFAULT ('NORMAL')
);

CREATE TABLE Recipes_Projeto_Cookenu (
id VARCHAR(255) NOT NULL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
createdAt DATE NOT NULL,
user_id VARCHAR(255),
	FOREIGN KEY (user_id) REFERENCES Users_Projeto_Cookenu(id)
);

CREATE TABLE Followers_Projeto_Cookenu (
id VARCHAR(255) NOT NULL PRIMARY KEY,
user_id VARCHAR(255),
	FOREIGN KEY (user_id) REFERENCES Users_Projeto_Cookenu(id),
following_id VARCHAR(255),
	FOREIGN KEY (following_id) REFERENCES Users_Projeto_Cookenu(id)
);

SELECT * FROM Users_Projeto_Cookenu;
SELECT * FROM Recipes_Projeto_Cookenu;
SELECT * FROM Followers_Projeto_Cookenu;

SELECT * FROM Recipes_Projeto_Cookenu WHERE user_id LIKE '0673d409-2910-4a10-8113-7384327d7e64';
DELETE FROM Recipes_Projeto_Cookenu WHERE id LIKE '${id}';


SELECT * FROM Recipes_Projeto_Cookenu
JOIN Users_Projeto_Cookenu
ON Recipes_Projeto_Cookenu.user_id = Users_Projeto_Cookenu.id
WHERE user_id LIKE '0673d409-2910-4a10-8113-7384327d7e64';


DROP TABLE Recipes_Projeto_Cookenu;
DROP TABLE Users_Projeto_Cookenu;
DROP TABLE Followers_Projeto_Cookenu;