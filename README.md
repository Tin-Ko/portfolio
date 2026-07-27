# Portfolio — Tin Timothy Ko

Personal portfolio site. A two-pane layout: a sticky left pane with identity, navigation, and links, and a scrolling right pane with About, Experience, Projects, and Skills.

**Live:** https://tin-ko.github.io/portfolio/

## Tech stack

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Icons | `react-icons` |
| Linting | ESLint 9 |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## Getting started

The Vite app lives in the nested `portfolio/` directory, so run everything from there.

```bash
cd portfolio && npm install
```

Start the dev server at http://localhost:5173/portfolio/:

```bash
cd portfolio && npm run dev
```

Other scripts:

```bash
cd portfolio && npm run build
```

```bash
cd portfolio && npm run preview
```

```bash
cd portfolio && npm run lint
```

## Project structure

```
.
├── .github/workflows/deploy.yml   # Builds ./portfolio and deploys to GitHub Pages
└── portfolio/
    ├── index.html                 # Page title, meta description, favicon
    ├── vite.config.js             # base: '/portfolio/' for Pages
    ├── public/
    │   ├── logo.svg               # TK monogram favicon
    │   └── Tin_Ko_Resume.pdf      # Served directly; linked from the Resume link
    └── src/
        ├── App.jsx                # Layout + IntersectionObserver scroll-spy nav
        ├── components/
        │   ├── LeftPane.jsx       # Identity, nav, social links, resume link
        │   ├── RightPane.jsx      # Wraps the four content sections
        │   ├── About.jsx          # Bio prose + education list
        │   ├── Experience.jsx     / ExperienceItem.jsx
        │   ├── Projects.jsx       / ProjectItem.jsx
        │   └── Skills.jsx         / SkillCategory.jsx
        └── data/
            ├── constants.js       # Name, headline, location, bio, contact URLs
            └── resumeData.js      # Education, experiences, projects, skills
```

## Editing content

Almost everything is data-driven — you shouldn't need to touch components to update the site.

- **Name, headline, location, bio, social links, resume link** → `src/data/constants.js`
- **Education, experience, projects, skills** → `src/data/resumeData.js`
- **Navigation sections** → the `NAV_ITEMS` array in `src/data/constants.js` (each `id` must match the `id` on the corresponding `<section>`)

The one exception is the About prose. The three intro paragraphs in `src/components/About.jsx` are written inline so parts of them can be emphasized, so edit that file directly.

To swap the resume, drop the new PDF in `portfolio/public/` and update `RESUME_URL` in `constants.js`. It is built as `` `${import.meta.env.BASE_URL}<filename>` `` so it resolves correctly under the `/portfolio/` base path.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which installs dependencies, builds `./portfolio`, and publishes `./portfolio/dist` to GitHub Pages.

Because the site is served from a project subpath, `vite.config.js` sets `base: '/portfolio/'`. If the repository is ever renamed or moved to a user site, update that value to match — otherwise assets will 404 in production.
