# 🎬 Projeto Lista de Filmes Favoritos

Projeto desenvolvido com **React e JavaScript** com o objetivo de praticar conceitos de desenvolvimento front-end, principalmente componentes, estados, efeitos, consumo de API e armazenamento de dados no navegador.

A aplicação apresenta uma lista de filmes favoritos, permitindo visualizar informações sobre cada obra, adicionar filmes a uma watchlist e registrar avaliações pessoais.

## 🚀 Funcionalidades

* 🎬 Lista de filmes favoritos
* 🔎 Busca automática dos pôsteres dos filmes através de uma API
* 📖 Visualização de informações e sinopse dos filmes
* ⭐ Avaliação dos filmes de 0 a 10
* 📌 Watchlist para filmes que desejo assistir
* 💾 Persistência da watchlist e das avaliações utilizando `localStorage`
* 🖼️ Modal com informações detalhadas do filme
* 📱 Interface responsiva
* ✨ Animações e efeitos visuais nos cards

## 🛠️ Tecnologias utilizadas

* **JavaScript**
* **React**
* **Vite**
* **Tailwind CSS**
* **CSS**
* **HTML**
* **Git e GitHub**
* **TMDB API**
* **localStorage**

## 🎥 API utilizada

Os pôsteres dos filmes são obtidos através da **The Movie Database (TMDB) API**.

A aplicação envia o título e o ano do filme para a API, que retorna informações relacionadas à obra. A partir do resultado, o projeto utiliza o caminho do pôster fornecido pela TMDB para exibi-lo na interface.

A API também foi utilizada como uma forma prática de aprender a trabalhar com:

* `fetch`
* requisições HTTP
* `async/await`
* tratamento de erros
* `JSON`
* variáveis de ambiente
* integração de uma aplicação React com um serviço externo

A chave da API é armazenada em uma variável de ambiente e não é disponibilizada diretamente no código-fonte.

## 💾 Persistência de dados

O projeto utiliza o **localStorage** do navegador para manter informações mesmo depois que a página é atualizada ou fechada.

Atualmente são armazenados:

* Filmes adicionados à watchlist
* Avaliações atribuídas aos filmes

Dessa forma, os dados permanecem disponíveis no navegador sem a necessidade de um banco de dados.

## 🎨 Estilização

A interface foi desenvolvida com uma estética inspirada em **cinema clássico e noir**, utilizando uma paleta escura, tons avermelhados, tipografia inspirada em letreiros de cinema, efeitos de granulação, sombras, animações e elementos visuais que remetem a uma película cinematográfica.

A **estilização visual e parte do design foram desenvolvidos com auxílio de Inteligência Artificial**.

O objetivo principal deste projeto, entretanto, não foi aprofundar conhecimentos de design ou CSS, mas sim utilizar a construção da interface como contexto para praticar **JavaScript e React**.

Durante o desenvolvimento, o foco esteve principalmente em compreender e aplicar conceitos como:

* Componentes React
* Props
* `useState`
* `useEffect`
* Renderização de listas
* Eventos
* Manipulação de estado
* Condicionais
* Consumo de APIs
* Persistência com `localStorage`
* Organização de arquivos e componentes

A IA foi utilizada como ferramenta de apoio principalmente na parte visual, enquanto o projeto serviu como ambiente de aprendizado e prática dos conceitos de programação.

## 📂 Estrutura do projeto

```text
src/
├── assets/
│   └── fotominha.JPG
├── components/
│   ├── Filmes.jsx
│   └── Watchlist.jsx
├── data/
│   └── filmes.js
├── services/
│   └── tmdb.js
├── styles/
│   └── filmes.css
├── App.jsx
└── index.css
```

### Organização

**`components/`**

Contém os componentes principais da aplicação.

* `Filmes.jsx` → exibe a lista principal de filmes.
* `Watchlist.jsx` → exibe os filmes adicionados à watchlist.

**`data/`**

Contém os dados dos filmes utilizados no projeto.

**`services/`**

Contém a lógica relacionada ao consumo da API externa.

* `tmdb.js` → realiza as requisições para a TMDB API e obtém os pôsteres.

**`styles/`**

Contém os estilos específicos da aplicação.

**`App.jsx`**

É o componente principal da aplicação e concentra estados, persistência dos dados e integração entre os componentes.

## 📚 Objetivo do projeto

Este projeto foi desenvolvido principalmente como **projeto de aprendizado**.

A ideia foi transformar um tema pessoal — filmes favoritos — em uma aplicação real para praticar desenvolvimento com React e JavaScript.

O projeto também funciona como parte do meu portfólio e como registro da minha evolução durante os estudos de desenvolvimento de software.

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

* Sistema de busca de novos filmes
* Cadastro de novos filmes pelo usuário
* Filtros por gênero
* Ordenação por avaliação
* Página individual para cada filme
* Integração com banco de dados
* Backend próprio
* Sistema de usuários
* Autenticação
* Deploy da aplicação

## 👨‍💻 Autor

**Gabriel Zambo**

Estudante de Engenharia de Software interessado em desenvolvimento web e backend.


