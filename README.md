# Portfolio

Sudhir Kumar's personal software developer portfolio, built with [Astro](https://astro.build).

**Live site:** https://imsudhirk.github.io/portfolio/

## Editing content

All page content lives in `src/components/`:

- `Hero.astro` — name, tagline, intro
- `About.astro` — about-me text
- `Skills.astro` — skills list
- `Projects.astro` — project cards
- `Experience.astro` — work history
- `Contact.astro` — email / GitHub / LinkedIn links

Edit the arrays/strings at the top of each file with your real details.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`      | Installs dependencies                        |
| `npm run dev`       | Starts local dev server at `localhost:4321`  |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the build locally before deploying   |

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site with Astro and publishes it to GitHub Pages. GitHub Pages must be set to
source = "GitHub Actions" in the repo settings (Settings → Pages).
