import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },

  /*
    GitHub Pages configuration:

    1. User site
       URL: https://<github-username>.github.io
       Use:
       site: "https://<github-username>.github.io",
       base: "/",

    2. Project site
       URL: https://<github-username>.github.io/<repo-name>
       Use:
       site: "https://<github-username>.github.io",
       base: "/<repo-name>/",

    Replace the placeholders below before deploying. The default branch is
    assumed to be "main", and the workflow in .github/workflows/deploy.yml
    publishes the generated ./dist directory to GitHub Pages.
  */
  site: "https://yourusername.github.io",
  base: "/",
});
