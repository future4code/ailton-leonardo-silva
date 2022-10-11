# Desafio AMARO

### Sobre o desafio

Criação de API para cadastro e consulta de produtos.
Este é um desafio legado de um case real da empresa Amaro.

#### **Desenvolvimento do Projeto**

O projeto foi desenvolvido em TYPESCRIPT, no NODE.JS com o auxílio das bibliotecas, EXPRESS, CORS, KNEX, DOTENV, UUID, FS e com o banco de dados MYSQL.

Focando na orientação a objetos. Serviços agrupados em classes.

O projeto todo é focado na leitura de um arquivo externo, para recebermos os dados do cliente.

Após esse recebimento, devemos construir três diferentes tabelas com as especificações dos produtos do cliente.  

Fazemos a inserção automática dessa lista de produtos e fazemos as exibições de acordo com o escopo do projeto.

### **Link da documentação** do Postman
#### **[CASE AMARO](https://documenter.getpostman.com/view/21552015/2s83zgtQ5A)**

#### **End-point para inserção de dados**

* O cliente poderá enviá-los em arquivos json ou xml e a API deverá inserir no banco de dados. ✔️
* Escolha o banco de dados que achar melhor (MYSQL). ✔️

#### **End-point para consulta destes produtos**

* Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome, deverá listar todos os produtos com aquela respectiva busca, poderá ser feito em um ou mais end-points. ✔️
  Requisitos Obrigatórios
* Ter uma cobertura de teste relativamente boa, a maior que você conseguir.
  PLUS - Não necessário
* Colocar uma autenticação JWT.

#### **Orientações**

* Procure fazer uma API sucinta. ✔️
* Os arquivos (json, xml) junto com o formato que o cliente irá enviar estão no repositório. ✔️
* Pensa em escalabilidade, pode ser uma quantidade muito grande de dados. ✔️
* Coloque isso em um repositório GIT. ✔️
* Colocar as orientações de setup no README do seu repositório. ✔️

### **AUTOR**
#### **[Leonardo Simas](https://github.com/leonardosimas)**

