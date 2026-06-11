# FrotaControl

<div align="center">

![React](https://img.shields.io/badge/React-19.2.7-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.4.2-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![Router](https://img.shields.io/badge/React_Router-7.17.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-UI-1F4D3A?style=for-the-badge)

### Live Demo

[Open FrotaControl](https://fleet-management-system-chi.vercel.app/)

An interactive React web application for managing vehicle fleets, built with reusable components, contexts, props, styled-components, and responsive layouts.

</div>

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Data Structure](#data-structure)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Notes](#notes)
- [Developers](#developers)

---

## Overview

FrotaControl is a React-based fleet management platform. The application was built to manage vehicles, verify fleet statistics, filter vehicle categories, query business information (CNPJ/CEP), and track favorite vehicles, offering dynamic UI/UX with a premium dark/light mode toggle.

The project includes:

- A dashboard hero section with fleet statistics (Total, Active, Maintenance, Favorites)
- A vehicle database featuring cars, motorcycles, and trucks
- Advanced search and filters (by vehicle types, status, and details)
- Dedicated detailed vehicle pages
- Favorites management system with global states
- Institutional lookup tool (CNPJ and CEP queries with input masks)
- Global dark and light themes using React Context
- A responsive navbar with full layout adaptiveness

---

## Core Features

### Dashboard & Hero Section

- High-impact visual introduction
- Quick-access CTA buttons to view vehicles or perform searches
- Auto-calculated summary cards showing total fleet count, active vehicles, in maintenance, and favorites

### Vehicle Fleet Database

- Renders 10 mock vehicles from a local data file
- Modular `CardVeiculo` component receiving data via props
- Dynamically handles multiple types: Cars, Motorcycles, and Trucks

### Advanced Filters and Search

- Search bar with real-time text input matching models or plates
- Segmented category filtering (All, Cars, Motorcycles, Trucks)
- Action buttons to reset filters instantly

### Card Interactions & Detailed View

- Persistent favorite toggle for adding specific vehicles to a favorites list
- Full detail routing (`/veiculo/:id`) showcasing technical details and status info

### Theme Toggle (Dark / Light)

- Global dynamic styling transition using React `useContext`
- Complete color scheme swap mapping background, surfaces, borders, and main actions

### Company Search (Empresa Page)

- Form inputs tailored for CNPJ and CEP searches
- Built-in regex masks for clean input formatting
- Quick status notifications alerting users that features are in development

---

## Technologies Used

- React
- React Router DOM
- Styled Components
- Vite
- JavaScript ES6+
- HTML5
- CSS3
- Axios
- React Toastify
- React Icons
- DotLottie React

---

## Data Structure

The fleet data lives in `src/data/Dados.jsx`.

Each vehicle object contains at least:

- `id`
- `tipoVeiculo`
- `codigoMarca`
- `codigoModelo`
- `ano`
- `placa`
- `quilometragem`
- `status`
- `descricao`
- `imagens` (array of image URLs)
- `favoritado`
- `situacaoManutencao` (optional)

---

## Folder Structure

```text
src/
├── components/
│   ├── BarraPesquisa/
│   ├── BotaoFavorito/
│   ├── CardVeiculo/
│   ├── Filtros/
│   ├── Footer/
│   ├── Header/
│   └── Loading/
├── contexts/
│   ├── FavoritosContext.jsx
│   ├── FrotaContext.jsx
│   └── TemaContext.jsx
├── data/
│   └── Dados.jsx
├── pages/
│   ├── Busca/
│   ├── DetalhesVeiculo/
│   ├── Empresa/
│   ├── Favoritos/
│   ├── Home/
│   └── NotFound/
├── routes/
│   └── index.jsx
├── services/
│   └── api.jsx
├── styles/
│   ├── GlobalStyles.jsx
│   └── Tema.jsx
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Notes

- The app is fully responsive across mobile, tablet, and desktop screens.
- Global toast notifications are managed using React Toastify.
- Styles adapt seamlessly between light and dark modes through a central theme provider.

---

## Developers

This project was developed by:
- [Arthur Carvalho](https://github.com/TutuCarvalho)
- [Jhonata Raibolt](https://github.com/jhonataraibolt)
- [Leilton Braga](https://github.com/LeiltonBraga)
- [Yuri Vieira](https://github.com/DevYuriVieira)
- [Lucas Alves](https://github.com/usuario5)
- [Romulo Evangelista](https://github.com/RomuloSEvangelista)

---

# Versão em Português

## Índice

- [Visão Geral](#visão-geral-1)
- [Funcionalidades Principais](#funcionalidades-principais-1)
- [Tecnologias Usadas](#tecnologias-usadas-1)
- [Estrutura dos Dados](#estrutura-dos-dados-1)
- [Estrutura de Pastas](#estrutura-de-pastas-1)
- [Como Executar](#como-executar-1)
- [Observações](#observações-1)
- [Desenvolvedores](#desenvolvedores-1)

---

## Visão Geral

**FrotaControl** é uma plataforma baseada em React para gerenciamento de frotas de veículos. A aplicação foi desenvolvida para controle de veículos, verificação de estatísticas de frota, filtragem por categorias, busca de dados institucionais (CNPJ/CEP) e acompanhamento de favoritos, oferecendo uma experiência premium com alternância entre temas claro e escuro.

O projeto inclui:

- Dashboard com estatísticas em tempo real (Total, Ativos, Manutenção, Favoritos)
- Banco de dados local com carros, motos e caminhões
- Filtros dinâmicos e busca por texto avançada (por modelo ou placa)
- Páginas de detalhes dedicadas a cada veículo
- Sistema de favoritos integrado por estado global
- Consulta institucional fictícia de CNPJ e CEP com aplicação de máscaras nos campos
- Suporte a temas dinâmicos (Dark/Light mode) usando Context API
- Navbar responsiva com transições de layout suaves

---

## Funcionalidades Principais

### Dashboard & Seção Hero

- Interface de introdução corporativa e moderna
- Botões de chamada para ação (CTA) para acessar a frota ou a tela de busca
- Cards de estatísticas calculados dinamicamente para indicar o status da frota

### Banco de Dados da Frota

- Renderiza 10 veículos fictícios a partir de um arquivo local
- Componente `CardVeiculo` modularizado recebendo parâmetros por props
- Tratamento correto para diferentes categorias: Carros, Motos e Caminhões

### Busca e Filtros Avançados

- Barra de busca que filtra por modelo ou placa conforme o usuário digita
- Filtragem rápida de categorias através de botões (Todos, Carros, Motos, Caminhões)
- Botão "Limpar Filtros" para restaurar a listagem original instantaneamente

### Interações de Card e Detalhes

- Botão de favoritar com persistência local no estado global do aplicativo
- Rota de detalhes dinâmica (`/veiculo/:id`) detalhando o histórico e especificações do veículo

### Alternância de Temas (Claro / Escuro)

- Transição visual global baseada em React `useContext`
- Mudança total da paleta de cores (background, superfícies, bordas e botões principais) sem quebrar o layout

### Consulta de Empresa (Página Empresa)

- Interface contendo formulários de busca rápida para CEP e CNPJ
- Máscaras com Expressões Regulares (Regex) nos campos de entrada de texto
- Notificação de status com feedback de "Funcionalidade em desenvolvimento"

---

## Tecnologias Usadas

- React
- React Router DOM
- Styled Components
- Vite
- JavaScript ES6+
- HTML5
- CSS3
- Axios
- React Toastify
- React Icons
- DotLottie React

---

## Estrutura dos Dados

Os dados dos veículos ficam em `src/data/Dados.jsx`.

Cada veículo possui as seguintes chaves de informação:

- `id`
- `tipoVeiculo`
- `codigoMarca`
- `codigoModelo`
- `ano`
- `placa`
- `quilometragem`
- `status`
- `descricao`
- `imagens` (array de URLs de imagem)
- `favoritado`
- `situacaoManutencao` (opcional)

---

## Estrutura de Pastas

```text
src/
├── components/
│   ├── BarraPesquisa/
│   ├── BotaoFavorito/
│   ├── CardVeiculo/
│   ├── Filtros/
│   ├── Footer/
│   ├── Header/
│   └── Loading/
├── contexts/
│   ├── FavoritosContext.jsx
│   ├── FrotaContext.jsx
│   └── TemaContext.jsx
├── data/
│   └── Dados.jsx
├── pages/
│   ├── Busca/
│   ├── DetalhesVeiculo/
│   ├── Empresa/
│   ├── Favoritos/
│   ├── Home/
│   └── NotFound/
├── routes/
│   └── index.jsx
├── services/
│   └── api.jsx
├── styles/
│   ├── GlobalStyles.jsx
│   └── Tema.jsx
├── App.jsx
└── main.jsx
```

---

## Como Executar

### Instalar Dependências

```bash
npm install
```

### Rodar o Projeto

```bash
npm run dev
```

### Gerar Build de Produção

```bash
npm run build
```

---

## Observações

- A aplicação é totalmente responsiva em dispositivos móveis, tablets e desktops.
- Notificações globais amigáveis integradas através de toasts.
- O estilo responde perfeitamente à mudança de cor por meio do provedor de temas do styled-components.

---

## Desenvolvedores

Projeto desenvolvido por:
- [Arthur Carvalho](https://github.com/TutuCarvalho)
- [Jhonata Raibolt](https://github.com/jhonataraibolt)
- [Leilton Braga](https://github.com/LeiltonBraga)
- [Yuri Vieira](https://github.com/DevYuriVieira)
- [Lucas Alves](https://github.com/usuario5)
- [Romulo Evangelista](https://github.com/RomuloSEvangelista)
