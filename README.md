# Api Escola
Api para uma escola para operações basicas

# status : em desenvolvimento

## Sobre

O projeto **Api Escola** é uma api desenvolvida para cadastro de alunos,professores,salas e operações basicas.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [AdonisJs](https://adonisjs.com/)
- [sqlite](https://www.sqlite.org/index.html)

## Como baixar o projeto e rodar em ambiente de desenvolvimento

Para rodas o projeto você precisa antes ter instalado:
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/pt-br/)


#No terminal rode o seguinte comando
$ git clone https://github.com/savinnsk/Api_school.git

#Entre na pasta do projeto
$ cd Api_scool

#Instale as pedendências
$ npm install
$ npm install @adonisjs/lucid@^16.0.1
$ node ace configure @adonisjs/lucid

-selecione banco de dados sqlite

- no arquivo .env cole as segintes variavéis:

PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=4UqyPzjegWXIsf-TR73H-6GfgVg6kjwD
DRIVE_DISK=local
DB_CONNECTION=sqlite


Agora é só fazer a migrations com o seguinte codigo :
```zsh

$ node ace migration:run 

```

E acesse a rota => http://localhost:3333 

## Routes



Desenvolvido por [Savio Picanço Do Espirito Santo Brito](https://github.com/savinnsk)

=> [Linkedin](https://www.linkedin.com/in/savio-pican%C3%A7o-b739a518a/)
