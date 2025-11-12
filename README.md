# JDMcars Garage — Preentrega 2

Sitio estático maquetado con **Bootstrap 5** + **CSS propio**.

## Estructura
```
.
├── index.html
├── catalogo.html
├── nosotros.html
├── contacto.html
├── privacidad.html
├── terminos.html
├── assets/
│   ├── css/styles.css
│   ├── js/script.js
│   └── img/ (imágenes de ejemplo)
└── .gitignore
```

## Requisitos cubiertos
- HTML semántico, prolijo y comentado.
- Bootstrap 5 por CDN + clases utilitarias (grids, cards, forms).
- CSS avanzado: variables, modificadores, media queries, utilidades.
- Todas las páginas linkean el mismo `styles.css` y el bundle de Bootstrap.
- Librerías JS/CSS del framework agregadas (Bootstrap).
- Repositorio listo para GitHub Pages.

## Cómo correr localmente
Abrí `index.html` en tu navegador. También podés usar Live Server (VS Code).

## Publicar en GitHub Pages
1. Crear repo y hacer push:
   ```bash
   git init
   git add .
   git commit -m "Preentrega 2: estructura avanzada + estilos + bootstrap"
   git branch -M main
   git remote add origin <URL-DE-TU-REPO>
   git push -u origin main
   ```

2. En GitHub → *Settings* → *Pages* → **Deploy from a branch** → *Branch:* `main` y carpeta `/root` → **Save**.

## Flujo de ramas sugerido
- `main`: estable, deploy a Pages
- `feat/catalogo-filtros`: mejoras de catálogo
- `fix/responsive-header`: ajustes responsive del hero
- `style/paleta`: cambios de colores

Commits ejemplo:
- `feat(catalogo): filtro por modelo y orden por potencia`
- `fix(nav): estado activo en mobile`
- `style(theme): contraste de botones y footer`

## Licencia
Uso académico.
