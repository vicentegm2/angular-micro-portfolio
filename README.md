# Angular Micro-Portfolio

Proyecto de aprendizaje con **Angular 22 (standalone components, signals)** y buenas prácticas de GitHub.  
El objetivo es crear un **portfolio simple** con una página de inicio y una galería de proyectos cargada desde `assets/projects.json`.

## 🚀 Tecnologías

- Angular 22
- TypeScript (estricto)
- SCSS
- GitHub Actions (CI)
- GitHub Pages (deploy)

## 📂 Estructura básica

```
src/
 ├── app/
 │    ├── pages/
 │    │     ├── home/
 │    │     └── projects/
 │    └── app.routes.ts
 ├── assets/
 │    └── projects.json
```

## ▶️ Ejecutar en local

```bash
npm install
ng serve -o
```

## 🛠️ Scripts útiles

- `npm run lint` → analiza errores de estilo
- `npm run format` → aplica Prettier
- `npm run build` → build producción

## 🌍 Deploy

El proyecto se desplegará en:

- GitHub Pages → [demo link pendiente]
- Alternativa: Vercel/Netlify

## 📚 Aprendizaje

Este repo sirve para practicar:

- Ramas con Git (`main` estable, features en ramas cortas).
- Commits con [Conventional Commits](https://www.conventionalcommits.org/).
- Issues y Pull Requests.
- CI/CD con GitHub Actions.

## 📜 Licencia

Este proyecto está bajo licencia [MIT](./LICENSE).
