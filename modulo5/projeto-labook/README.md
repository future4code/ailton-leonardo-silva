# LABOOK
O projeto foi desenvolvido em Typescript, com o auxílio das bibliotecas, Express, Cors, Knex, UUID, BCryptJS e JWT.
Você sabia que está ficando mais relevante no mundo de devs? Quanto mais e mais projetos você faz, mais tem clientes te divulgando por aí!
De manhã, você acordou, tomou uma bela xícara de café, verificou sua caixa de email e viu que tinha mais uma proposta de Freela. Freela vem de Freelancer, que é um trabalhador autônomo que sempre trabalha em projetos diferentes. Dessa vez, um cliente deseja te pagar muito bem para implementar o Cookenu.
# Entidades (typescript)

### 1) User (usuário)

- id em formato string e gerado pela própria aplicação
- name em formato string
- email em formato string
- password: senha hasheada em formato string
- role: enum “NORMAL” ou “ADMIN”

### 2) Post (publicação)

- id em formato string e gerado pela própria aplicação
- content em formato string representando o conteúdo em texto do post
- user_id em formato string e representando o id de quem criou o post
- likes em formato number iniciando em 0

# Tabelas (mysql)

### 1) Labook_Users

- id: VARCHAR(255) e chave primária
- name: VARCHAR(255) e não-nulo
- email: VARCHAR(255), não-nulo e único
- password: VARCHAR(255) e não-nulo
- role: ENUM “NORMAL” ou “ADMIN” com padrão “NORMAL” não-nulo

### 2) Labook_Posts

- id: VARCHAR(255) e chave primária
- content: VARCHAR(255) e não-nulo
- user_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users

### 3) Labook_Likes

- id: VARCHAR(255) e chave primária
- post_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Posts
- user_id: VARCHAR(255) e chave estrangeira referenciando a id de Labook_Users

# Funcionalidades do Projeto

## Exercício 1

Crie um endpoint chamado de signup para cadastrar novos usuários. Ele deve receber o name, email e password do novo usuário. Em sucesso, deve ser retornada uma mensagem e também um token de acesso que guarda o id e a role da pessoa.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- name, email e password devem ser fornecidos e serem do tipo string
- name deve possuir ao menos 3 caracteres, enquanto password ao menos 6 caracteres
- email deve ter um formato válido e único, não podendo repetir no banco de dados

## Exercício 2

Crie um endpoint chamado de login para logar de usuários já cadastrados. Ele deve receber o email e o password da pessoa, e em caso de sucesso retornar a mensagem e o token de acesso.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- email e password devem ser fornecidos e serem do tipo string
- password deve possuir ao menos 6 caracteres
- email deve ter um formato válido
- O usuário com o e-mail fornecido deve existir no sistema

## Exercício 3

Crie um endpoint protegido que cria um post. Caso tentem acessá-lo sem token deve ser retornada uma mensagem de erro.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- content deve possuir no mínimo 1 caractere

## Exercício 4

Crie um endpoint protegido que retorna todos os posts. Caso tentem acessá-lo sem token deve ser retornada uma mensagem de erro.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- dentre as informações dos posts, deve existir também o número de likes de cada um

## Exercício 5

Crie um endpoint protegido que deleta um post. Caso tentem acessá-lo sem token deve ser retornada uma mensagem de erro. Admins podem deletar qualquer post enquanto contas normais só podem deletar seus próprios posts.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- id do post a ser deletado deve existir no sistema

## Exercício 6

Crie um endpoint protegido que dá like em um post. Uma mesma pessoa não pode dar mais de um like a um post.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- id do post que ganhará o like deve existir no sistema
- se o post já estiver com o like da pessoa é retornado um erro

## Exercício 7

Crie um endpoint protegido que remove o like de um post.

Validações e Regras de Negócio do endpoint (baixa prioridade, implemente se der tempo):

- id do post que ganhará o like deve existir no sistema
- se o post não estiver com o like da pessoa é retornado um erro

### Todas as funcionalidades do projeto foram atendidas.

### **AUTOR**
#### **[Leonardo Simas](https://github.com/leonardosimas)**


