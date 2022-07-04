# Desafio Wine(Teste seletivo) backend

Esse projeto tem como objetivo avaliar habilidades de desenvolvimento web.

### 🔧 Instalação

Baixe o projeto para sua máquina:

```git clone git@github.com:aryherton/wine_backend.git```

Acesse a pasta do projeto:

```cd - caminho da pasta -```

Dentro da pasta do projeto digite:

```npm install```


## !!! ATENÇÃO !!!
### Antes de executar o projeto é necessário ter o mongodb instalado ou container docker.

<a href="https://renatogroffe.medium.com/mongodb-mongo-express-docker-compose-montando-rapidamente-um-ambiente-para-uso-824f25ca6957">Mongodb com Docker</a><br /><br />

### Com o mongodb funcionando crie um db com o seguite nome: "Wine"
#### Em seguida crie dentro do db "Wine" uma collection com o nome: "users"

## 🔩 Agora com o mongodb configurado(Wine > users):
#### Realize a instalação:

```npm install```

#### digite o comando abaixo para subir o backend
```npm run dev```

## Se estiver usando mongodb em um container docker, na raiz do projeto digite:
 ```docker build .```

### Após realizar o build, digite o comando abaixo, para executar o container:
```docker run -p 3005:3005 -identificação da imagem(docker)```

## Agora com o mongodb e backend funcionado volte a configuração do frontend:
<a href="https://github.com/aryherton/WineTestSelec"> >>> Frontend <<<</a><br /><br />

