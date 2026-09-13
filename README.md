# BBI Cash — sitio público

`www.bbicash.com` · Astro trilingüe (en / es / pt) · desplegado en Vercel.

> ⚠️ **No confundir con `bbi-cash-crm`.** Ése es **LOCUS**, el CRM con login que sirve
> `locus4you.app`. Éste es el sitio de venta que ve cualquiera. Los nombres se parecen
> y el error caro es tocar el que no era.

## Analytics — Umami Cloud (13-sep-2026)

| | |
|---|---|
| Cuenta | `bbicashinfo@gmail.com` en `cloud.umami.is` — **separada** de la de itbstudio, para que los datos de BBI no se mezclen con los del portfolio |
| Sitio | «BBI cash» · `www.bbicash.com` |
| Website ID | `d1004eb3-23f6-48cc-816e-0e8bf55d624d` |
| Dónde vive | `src/layouts/Layout.astro`, en el `<head>` del layout raíz → sale en las tres páginas |

**Por qué Umami y no Vercel Web Analytics:** en plan Pro, Vercel no trae eventos incluidos
—cobra US$ 0,03 cada 1.000 contra el crédito, compartido entre todos los proyectos— y la
cuenta ya está excedida en Fluid Active CPU. Umami Hobby es $0 por 100k eventos/mes y no
toca ese crédito. Además es cookieless: no hace falta banner de cookies.
Decisión completa: `itb-studio-app/docs/SUSCRIPCIONES-Y-ACCESOS.md` §1.

Dos detalles que importan si alguien lo toca: `is:inline` hace que Astro lo emita tal cual
en vez de pasarlo por su bundler, y `defer` evita que bloquee el render.

---

## Referencia del starter de Astro

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
