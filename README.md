# Portfolio — Matheus Henrique de Oliveira

Portfolio profissional desenvolvido em **Angular 19** (standalone components) com TypeScript e SCSS.

## Sobre

Este projeto transforma a documentação de carreira e projetos em um site de portfolio moderno, dark theme, responsivo e com aspecto profissional.

### Seções

- **Hero** — Apresentação, status e estatísticas
- **Sobre** — Bio, formação, idiomas e certificações
- **Experiência** — NextAge Sistemas com projetos expansíveis + timeline de carreira
- **Projetos** — Cards filtráveis (Backend / Full Stack) com links para GitHub
- **Skills** — Stack tecnológica organizada por categorias
- **Contato** — Links para LinkedIn e GitHub

## Tecnologias

- Angular 19 (Standalone Components)
- TypeScript
- SCSS
- Design system próprio (CSS variables, dark theme)

## Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm start
# ou
ng serve

# Build de produção
npm run build
```

Acesse `http://localhost:4200`.

## Estrutura

```
src/
├── app/
│   ├── components/     # Header, Hero, About, Experience, Projects, Skills, Contact, Footer
│   ├── pages/          # Home (página única)
│   ├── services/       # PortfolioDataService (dados centralizados)
│   ├── models/         # Interfaces TypeScript
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.scss         # Design system global
└── index.html
```

## Dados

Todos os dados (projetos, experiência, skills, timeline) estão centralizados em `PortfolioDataService`, facilitando manutenção e futuras integrações com API.

## Autor

**Matheus Henrique de Oliveira**  
Software Engineer · Backend · Full Stack · IoT · AI  

[LinkedIn](https://www.linkedin.com/in/mthws167/) · [GitHub](https://github.com/Mthws167)
