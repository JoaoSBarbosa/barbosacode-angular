# BarbosaCodeAngular

![Angular](https://img.shields.io/badge/Angular-17.3.17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/Licença-MIT-blue?style=for-the-badge)

---

## Sobre o Projeto

**BarbosaCodeAngular** é um projeto de **portfólio pessoal** feito com **Angular 17** e **Tailwind CSS**, com foco em:

- Estrutura modular e organizada
- Componentes reutilizáveis
- Design moderno, responsivo e clean
- Fácil manutenção e escalabilidade

O portfólio possui as seguintes seções:

1. **Hero** – Introdução com foto e texto "Olá, eu sou o..."
2. **Sobre mim** – Tecnologias que uso, habilidades, bancos de dados, backend etc.
3. **Educação e Experiência** – Timeline de estudos e trabalhos
4. **Skills** – Carrossel mostrando minhas tecnologias
5. **Projetos** – Carrossel de projetos, clicando em cada projeto vai para página de detalhes
6. **Contato** – Formulário de envio de mensagem
7. **Footer** – Informações finais

---

## Estrutura do Projeto

```text
src/
└─ app/
   ├─ core/           # Componentes globais (header, footer, navbar)
   ├─ home/           # Página principal (container das seções)
   ├─ sections/       # Seções: hero, about, education, skills, projects, contact
   ├─ project-details/# Página única com detalhes de projeto
   └─ shared/         # Componentes reutilizáveis (cards, botões etc.)
```

```
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 components
│   │   │   ├── 📁 interfaces
│   │   │   │   └── 📄 skill-icon.interface.ts
│   │   │   ├── 📁 section-base
│   │   │   │   ├── 🌐 section-base.component.html
│   │   │   │   ├── 🎨 section-base.component.scss
│   │   │   │   ├── 📄 section-base.component.spec.ts
│   │   │   │   └── 📄 section-base.component.ts
│   │   │   ├── 📁 skill-card
│   │   │   │   ├── 🌐 skill-card.component.html
│   │   │   │   ├── 🎨 skill-card.component.scss
│   │   │   │   ├── 📄 skill-card.component.spec.ts
│   │   │   │   └── 📄 skill-card.component.ts
│   │   │   └── 📄 components.module.ts
│   │   ├── 📁 core
│   │   │   ├── 📁 modules
│   │   │   │   ├── 📁 contact
│   │   │   │   │   ├── 🌐 contact.component.html
│   │   │   │   │   ├── 🎨 contact.component.scss
│   │   │   │   │   ├── 📄 contact.component.spec.ts
│   │   │   │   │   └── 📄 contact.component.ts
│   │   │   │   ├── 📁 footer
│   │   │   │   │   ├── 🌐 footer.component.html
│   │   │   │   │   ├── 🎨 footer.component.scss
│   │   │   │   │   ├── 📄 footer.component.spec.ts
│   │   │   │   │   └── 📄 footer.component.ts
│   │   │   │   ├── 📁 header
│   │   │   │   │   ├── 🌐 header.component.html
│   │   │   │   │   ├── 🎨 header.component.scss
│   │   │   │   │   ├── 📄 header.component.spec.ts
│   │   │   │   │   └── 📄 header.component.ts
│   │   │   │   └── 📁 hero
│   │   │   │       ├── 🌐 hero.component.html
│   │   │   │       ├── 🎨 hero.component.scss
│   │   │   │       ├── 📄 hero.component.spec.ts
│   │   │   │       └── 📄 hero.component.ts
│   │   │   ├── 📁 structure
│   │   │   │   ├── 🌐 structure.component.html
│   │   │   │   ├── 🎨 structure.component.scss
│   │   │   │   ├── 📄 structure.component.spec.ts
│   │   │   │   └── 📄 structure.component.ts
│   │   │   └── 📄 core.module.ts
│   │   ├── 📁 data
│   │   │   ├── 📄 education.data.ts
│   │   │   └── 📄 experience.data.ts
│   │   ├── 📁 sections
│   │   │   ├── 📁 about
│   │   │   │   ├── 🌐 about.component.html
│   │   │   │   ├── 🎨 about.component.scss
│   │   │   │   ├── 📄 about.component.spec.ts
│   │   │   │   └── 📄 about.component.ts
│   │   │   ├── 📁 education
│   │   │   │   ├── 🌐 education.component.html
│   │   │   │   ├── 🎨 education.component.scss
│   │   │   │   ├── 📄 education.component.spec.ts
│   │   │   │   └── 📄 education.component.ts
│   │   │   ├── 📁 experience
│   │   │   │   ├── 🌐 experience.component.html
│   │   │   │   ├── 🎨 experience.component.scss
│   │   │   │   ├── 📄 experience.component.spec.ts
│   │   │   │   └── 📄 experience.component.ts
│   │   │   ├── 📁 interface
│   │   │   │   ├── 📄 education.interface.ts
│   │   │   │   └── 📄 experience.interface.ts
│   │   │   ├── 📁 projects
│   │   │   │   ├── 🌐 projects.component.html
│   │   │   │   ├── 🎨 projects.component.scss
│   │   │   │   ├── 📄 projects.component.spec.ts
│   │   │   │   └── 📄 projects.component.ts
│   │   │   ├── 📁 technologies
│   │   │   │   ├── 🌐 technologies.component.html
│   │   │   │   ├── 🎨 technologies.component.scss
│   │   │   │   ├── 📄 technologies.component.spec.ts
│   │   │   │   └── 📄 technologies.component.ts
│   │   │   └── 📄 sections.module.ts
│   │   ├── 📄 app-routing.module.ts
│   │   ├── 🌐 app.component.html
│   │   ├── 🎨 app.component.scss
│   │   ├── 📄 app.component.spec.ts
│   │   ├── 📄 app.component.ts
│   │   ├── 📄 app.module.server.ts
│   │   └── 📄 app.module.ts
│   ├── 📁 assets
│   │   ├── 📁 images
│   │   │   ├── 📁 icons
│   │   │   │   ├── 🖼️ angular.svg
│   │   │   │   ├── 🖼️ arrowUp.svg
│   │   │   │   ├── 🖼️ bootstrap.svg
│   │   │   │   ├── 🖼️ css.svg
│   │   │   │   ├── 🖼️ docker.svg
│   │   │   │   ├── 🖼️ elasticsearch.svg
│   │   │   │   ├── 🖼️ facebook.svg
│   │   │   │   ├── 🖼️ figma.svg
│   │   │   │   ├── 🖼️ flyway.svg
│   │   │   │   ├── 🖼️ github copy.svg
│   │   │   │   ├── 🖼️ github.svg
│   │   │   │   ├── 🖼️ hibernate.svg
│   │   │   │   ├── 🖼️ html.svg
│   │   │   │   ├── 🖼️ java.svg
│   │   │   │   ├── 🖼️ javascript.svg
│   │   │   │   ├── 🖼️ keycloak.svg
│   │   │   │   ├── 🖼️ linkedin.svg
│   │   │   │   ├── 🖼️ maven.svg
│   │   │   │   ├── 🖼️ mysql-plain.svg
│   │   │   │   ├── 🖼️ mysql.svg
│   │   │   │   ├── 🖼️ nextjs.svg
│   │   │   │   ├── 🖼️ php.svg
│   │   │   │   ├── 🖼️ postgresql.svg
│   │   │   │   ├── 🖼️ rabbitmq.svg
│   │   │   │   ├── 🖼️ react.svg
│   │   │   │   ├── 🖼️ redis.svg
│   │   │   │   ├── 🖼️ sass.svg
│   │   │   │   ├── 🖼️ spring-cloud.svg
│   │   │   │   ├── 🖼️ spring-security.svg
│   │   │   │   ├── 🖼️ spring.svg
│   │   │   │   ├── 🖼️ tailwindcss.svg
│   │   │   │   ├── 🖼️ typescript.svg
│   │   │   │   ├── 🖼️ wildfly.svg
│   │   │   │   └── 🖼️ wordpress.svg
│   │   │   ├── 📁 profile
│   │   │   │   └── 🖼️ barbosa.png
│   │   │   ├── 📁 technologies
│   │   │   ├── 🖼️ logo-2.png
│   │   │   ├── 🖼️ logo-2.svg
│   │   │   ├── 🖼️ logo-3.svg
│   │   │   └── 🖼️ logo.svg
│   │   └── ⚙️ .gitkeep
│   ├── 📁 styles
│   │   └── 🎨 _variables.scss
│   ├── 📄 favicon.ico
│   ├── 🌐 index.html
│   ├── 📄 main.server.ts
│   ├── 📄 main.ts
│   └── 🎨 styles.scss
├── ⚙️ .editorconfig
├── ⚙️ .gitignore
├── 🐳 Dockerfile
├── 📝 README.md
├── ⚙️ angular.json
├── ⚙️ package.json
├── 📄 server.ts
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
└── ⚙️ tsconfig.spec.json
```
