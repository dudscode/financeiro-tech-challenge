# Financeiro-Fiap

![Next.js](https://img.shields.io/badge/Next.js-14.2.11-blue) ![React](https://img.shields.io/badge/React-18-blue)
![MUI](https://img.shields.io/badge/MUI-6.0.2-0073e6) ![Storybook](https://img.shields.io/badge/Storybook-8.2.9-ff4785)
![Storybook](https://img.shields.io/badge/Node-18.18-417e38)

## Descrição

O aplicativo **Financeiro-FIAP** foi desenvolvido para um desafio da FIAP utilizando Next.js e React. A proposta foi
construir uma aplicação baseada no seguinte
[design do Figma](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=503-4264&node-type=canvas)
e implementar um style guide consistente. Optamos pela biblioteca de componentes Material-UI (MUI) para oferecer uma
interface moderna e responsiva, garantindo que a experiência do usuário seja intuitiva e visualmente atraente. Além
disso, o projeto inclui um servidor JSON local para simular uma API REST e um ambiente de desenvolvimento de componentes
com Storybook.

## Requisitos

- [**Node.js**](https://nodejs.org/en) (versão 18.18)

## Como executar o projeto

1. **`npm i`**: Instale as dependências
2. **`npm run json-server`**: Inicie o servidor JSON
3. **`npm run dev`**: Inicie a aplicação em modo de desenvolvimento - <http://localhost:3000>
4. **`npm run storybook`**: inicie o storybook para ver a documentação dos componentes (opcional) -
   <http://localhost:6006>

## Scripts Principais

- **`npm i`**: Instala as dependencias
- **`npm run dev`**: Inicia o ambiente de desenvolvimento com Next.js.
- **`npm run build`**: Cria uma build de produção da aplicação Next.js.
- **`npm run start`**: Inicia a aplicação em modo de produção.
- **`json-server`**: Inicia um servidor JSON usando o arquivo `db.json`, disponível em `http://localhost:3001`.
- **`storybook`**: Inicia o Storybook em modo de desenvolvimento na porta `http://localhost:6006`.
- **`build-storybook`**: Cria uma build do Storybook para deploy.
- **`lint:fix`**: Corrige a formatação de código com Prettier.

Instale as dependencias com o comando npm i Executa o json-server com o comando npm run json-server execute a aplicacao
principal npm run dev para ver a documentacao do componentes com o storybook utilize o comando npm run storybook

## Tecnologias Utilizadas

- [**Next.js**](https://nextjs.org/) (v14.2.11): Framework React para renderização server-side.
- [**React**](https://react.dev/)(v18): Biblioteca de JavaScript para construção de interfaces de usuário.
- [**Material-UI**](https://mui.com/) (v6.0.2): Biblioteca de componentes estilizados para interfaces modernas.
- [**Axios**](https://axios-http.com/ptbr/docs/intro): Cliente HTTP para integração com APIs.
- [**JSON Server**](https://github.com/typicode/json-server): Ferramenta para simular uma API REST.
- [**Storybook**](https://storybook.js.org/): Ferramenta de desenvolvimento de componentes isolados.
- [**Husky**](https://github.com/typicode/husky#readme): Ferramenta para hooks Git, assegurando qualidade no processo de
  commit.
- [**Prettier**](https://prettier.io/) e [**ESLint**](https://eslint.org/): Ferramentas de formatação e linting de
  código.
