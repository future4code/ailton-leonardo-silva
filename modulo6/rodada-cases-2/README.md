# Estante Virtual

### **Link da documentação** do Postman
#### **[Estante Virtual](https://documenter.getpostman.com/view/21552015/2s83znpgTG)**

## Sobre o desafio
Criação de API para cadastro de atletas, provas e resultados para competições.
Este é um desafio legado de um case real para as Olímpiadas Rio2016.

#### **Desenvolvimento do Projeto**

**O projeto foi desenvolvido em TYPESCRIPT, no NODE.JS com o auxílio das bibliotecas, EXPRESS, CORS, KNEX, DOTENV, UUID e com o banco de dados MYSQL.**

## Jogos Olímpicos
Com a chegada dos jogos olímpicos, fomos designados para construir uma API REST em Ruby para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

100m rasos: Menor tempo vence
Lançamento de Dardo: Maior distância vence

**API**
Através da API, deveremos ser capazes de:

**Criar uma competição** ✔️
**Cadastrar resultados para uma competição**  ✔️ (todos os campos são obrigatórios), ex:
{
  "competicao": "100m classificatoria 1", 
  "atleta": "Joao das Neves", 
  "value": "10.234", 
  "unidade": "s"
}
ex:

{
  "competicao": "Dardo semifinal", 
  "atleta": "Claudio", 
  "value": "70.43", 
  "unidade": "m"
}
**Finalizar uma competição**. ✔️
**Retornar o ranking da competição, exibindo a posição final de cada atleta.** ✔️

#### **Detalhes:**

1 - A API não deve aceitar cadastros de resultados se a competição já estiver encerrada. ✔️
2 - A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada. ✔️
3 - No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta. ✔️
4 - O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação. ✔️
5 - Testes são obrigatórios.
6 - Necessária criação de um Readme para informar o passo a passo de como rodar a API. ✔️
7 - Não é necessário criar um banco de dados, podendo manter os dados na memória. (hint: sqlite) ✔️
8 - É imperativo a utilização de Ruby para a criação da API Rest.
9 - Sugerimos a utilização do git para versionar a solução. Um Pull Request (PR) para este repo, num branch com seu nome_sobrenome seria excelente, pois mais do que analisar o código, queremos analisar o fluxo de trabalho, a linha de pensamento e como evoluiu o código até chegar na solução.✔️

#### **Extras**

- Foram criadas tabelas em MySql para cadastrar atletas, competições e os resultados.
- Utilizado gerador de identidades UUID.
- Pensei em escalabilidade ao criar tabelas independentes.

### **Quer rodar a aplicação?**
#### **Faça um clone no seu terminal**
**[Estante Virtual](https://github.com/future4code/ailton-leonardo-silva/pull/67)**

#### **Você precisará instalar algumas bibliotecas.**
**Em seu terminal, instale:**

- npm i express @types/express
- npm i cors @types/cors
- npm i knex mysql @types/knex
- npm i dotenv
- npm i uuid @types/uuid

**Crie um arquivo .env com as configurações do seu banco de dados** (preferencialmente MySQL, caso deseje utilizar outro, adaptações no código e dependências serão necessárias).

DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASS = sua_sehna
DB_NAME = seu_banco_de_dados

**Execute a aplicação**
npm start

### TABELAS MYSQL
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
#Esta tabela será a junção das tabelas e o resultado do atleta
CREATE TABLE CASE_EstanteVirtual_Atletas_Competicoes (
	athlete_id VARCHAR(255),
		FOREIGN KEY (athlete_id) REFERENCES CASE_EstanteVirtual_Atletas(id),
	contest_id VARCHAR(255),
		FOREIGN KEY (contest_id) REFERENCES CASE_EstanteVirtual_Competicoes(id),
	value FLOAT,
    trynumber ENUM('0' , '1' , '2' , '3') DEFAULT ('0') NOT NULL
);


### 
### **AUTOR**

#### **[Leonardo Simas](https://github.com/leonardosimas)**