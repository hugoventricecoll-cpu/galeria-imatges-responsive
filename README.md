# Galeria d'imatges responsive

Projecte Vite amb una galeria d'imatges quadrades feta amb **CSS Grid** i CSS pur
(sense cap llibreria de CSS).

## Com executar-lo

```bash
npm install
npm run dev
```

Per comprovar la versió de producció:

```bash
npm run build
npm run preview
```

## Requisits

| Requisit | Implementació |
| --- | --- |
| R01. Imatges quadrades, mateixes dimensions, sense deformació ni bandes negres | `aspect-ratio: 1 / 1` i `object-fit: cover` |
| R02. 8 px entre imatges, 16 px als extrems i cantonades de 12 px | `gap: 8px`, `padding: 16px` i `border-radius: 12px` |
| R03. Menys de 600 px: 1 columna adaptada a la finestra | `grid-template-columns: minmax(0, 1fr)` |
| R04. De 600 px a 839 px: 2 columnes adaptades a la finestra | `@media (min-width: 600px)` |
| R05. A partir de 840 px: 3 columnes | `@media (min-width: 840px)` |
| R06. Amb 3 columnes, màxim 300 px | Contenidor de `948px` (3 × 300 px + 2 gaps de 8 px + 2 marges de 16 px) |

El contenidor té `max-width: 948px`, de manera que a partir de 948 px d'amplada
les tres columnes fan exactament 300 px i la galeria queda centrada. Per sota
d'aquesta amplada, les columnes s'adapten a l'espai disponible.

## Estructura

```text
.
├── index.html
├── public/
│   ├── favicon.svg
│   └── images/          # Les 12 imatges de la galeria
├── src/
│   ├── main.js
│   └── style.css        # Layout amb CSS Grid i media queries
└── vite.config.js
```
