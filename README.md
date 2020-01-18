# Semana Omnistack 10 - 13 a 19/01 de 2020

## Aplicação a ser desenvolvida

- Procure por desenvolvedores que estão usando as mesmas tecnologias que você com um clique!

## Tecnologias utilizadas

- Node.js
- React
- React Native

## Porquê a stack Javascript?

- Conhecimento de javascript é compartilhado entre as três tecnologias
- Critérios para se escolher um stack:

  - Entender o que o mercado procura e precisa
  - Tamanho da comunidade e do ecossistema?
  - Quem está por trás das tecnologias?
  - Quantidade de vagas no mercado?
  - O quão essas tecnologias estão alinhadas com seus objetivos?
  - O quão reaproveitável é o conhecimento dessas tecnologias?

## Backend

- Estruturação da API do projeto
- Sistemática de requisição e resposta
- Parâmetros em API
  - Query Params: request.query(filtros, ordenação, paginação)
  - Route Params: request.params(identificar um recurso na alteração ou remoção)
  - Body: request.body(dados para criação ou alteração de registros)
- Funcionalidades
  - Criar um novo dev: POST /dev
  - Pesquisar um novo dev: GET /search
  - Listar todos os devs: GET /index
- Dependências
  - "axios": "^0.19.1",
  - "cors": "^2.8.5",
  - "express": "^4.17.1",
  - "mongoose": "^5.8.7",
  - "socket.io": "^2.3.0"
- Softwares
  - Insomnia
  - MongoDB Compass
  - MongoDB Atlas

## Frontend

- Permitirá cadastrar os novos devs a partir da web
- Características do React
  - Componentes: abstração dos conteúdos da interface
  - Estado: guarda uma fotografia das informações
  - Propriedades: permite a transmissão de dados entre componentes
- Dependências
  - react cra (create react app)
  - React Hooks (useState, useEffect)
  - "axios": "^0.19.1",

## Mobile

- React Native usando o Expo
- Dependências

  - "axios": "^0.19.1",
  - "expo": "~36.0.0",
  - "expo-location": "~8.0.0",
  - "react": "~16.9.0",
  - "react-dom": "~16.9.0",
  - "react-native-gesture-handler": "~1.5.0",
  - "react-native-maps": "0.26.1",
  - "react-native-reanimated": "~1.4.0",
  - "react-native-safe-area-context": "0.6.0",
  - "react-native-screens": "2.0.0-alpha.12",
  - "react-native-web": "~0.11.7",
  - "react-native-webview": "7.4.3",
  - "react-navigation": "^4.0.10",
  - "react-navigation-stack": "^2.0.15",
  - "socket.io-client": "^2.3.0"

## Resultado final

![](./final-clip.gif)
