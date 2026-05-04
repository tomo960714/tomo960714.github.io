# Astro Portfolio

A simple, tasteful, static portfolio website built with Astro, TypeScript, Tailwind CSS, and MDX. It is designed for GitHub Pages and uses static output only.

## Install

```sh
npm install
```

## Run Locally

```sh
npm run dev
```

Astro will print a local URL, usually `http://localhost:4321`.

## Build

```sh
npm run build
```

## Preview The Production Build

```sh
npm run preview
```

## What To Edit First

- `src/data/profile.ts`: name, title, location, email, biography, education, and interests.
- `src/data/links.ts`: GitHub, LinkedIn, and optional CV URL.
- `src/data/skills.ts`: skills shown on the home and about pages.
- `src/data/experience.ts`: experience entries.
- `src/content/projects/`: project MDX files.
- `src/content/posts/`: optional notes or articles.

## Projects

Projects are Astro content collection entries in `src/content/projects`.

Each project supports:

- `title`
- `description`
- `role`
- `technologies`
- `repoUrl`
- `demoUrl`
- `featured`
- `date`

Set `featured: true` to show a project on the home page.

## Posts / Notes

Posts live in `src/content/posts`. They are optional. Set `draft: true` to hide a post from the generated site.

## GitHub Pages Configuration

Edit `astro.config.mjs` before deploying.

For a user site:

```js
site: "https://<github-username>.github.io",
base: "/",
```

For a project site:

```js
site: "https://<github-username>.github.io",
base: "/<repo-name>/",
```

Examples:

- User site: `https://yourusername.github.io`
- Project site: `https://yourusername.github.io/portfolio`

For the project site example, use:

```js
site: "https://yourusername.github.io",
base: "/portfolio/",
```

## Deploying To GitHub Pages

This repo includes `.github/workflows/deploy.yml`.

1. Push the project to GitHub.
2. Make sure the default branch is `main`.
3. In your GitHub repository, go to `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to `main`.

The workflow will run:

```sh
npm install
npm run build
```

Then it uploads `dist` and deploys it to GitHub Pages.

## Useful Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

You can also run Astro directly:

```sh
npm run astro -- --help
```
