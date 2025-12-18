# Vidkosha Cortex Docs Site (Docusaurus)

This folder contains the Docusaurus site. It is designed to be split into its own **public** repo and deployed with GitHub Pages.

## Local dev

Node.js is required.

```bash
cd docs-site
npm install
npm run start
```

## Build

```bash
cd docs-site
npm install
npm run build
npm run serve
```

## GitHub Pages deploy (public docs repo)

This repo includes a ready-to-go GitHub Pages workflow at `.github/workflows/deploy-pages.yml`.

1) Create a new **public** repo (example: `vidkosha-cortex-docs`).

2) Push this folder into that repo (recommended: subtree split so you keep history):

```bash
cd "/path/to/vidkosha_cortex (Private)"
git subtree split --prefix docs-site -b docs-site-public
git push git@github.com:<ORG>/<NEW_REPO>.git docs-site-public:main
```

3) In the new public repo, enable GitHub Pages:

- **Settings → Pages → Build and deployment → Source: GitHub Actions**

The workflow provides these env vars automatically during build:

- `DOCUSAURUS_URL` (e.g. `https://t3chnicallyinclined.github.io`)
- `DOCUSAURUS_BASE_URL` (e.g. `/<repo-name>/`)
- `DOCUSAURUS_ORG` / `DOCUSAURUS_REPO` / `DOCUSAURUS_REPO_URL`

## Publish from this private repo

If you keep `docs-site/` in this private repo but deploy from the public repo, use:

```bash
cd "/path/to/vidkosha_cortex (Private)"

# 1) commit your docs-site changes (subtree split only includes commits)
git add docs-site
git commit -m "docs-site: <message>"
git push origin staging

# 2) publish docs-site/ to the public Pages repo
./scripts/publish-docs-site.sh
```

## Hosted URLs (important)

If you deploy as a GitHub Pages **project site** (most common), the site lives under the repo name:

- Site root: `https://<org>.github.io/<repo>/`
- Docs: `https://<org>.github.io/<repo>/docs/drag-tour`

So `https://<org>.github.io/docs/drag-tour` will 404 unless you deploy at the domain root (e.g. a `/<org>.github.io` user/organization Pages repo) or you intentionally deploy into a repo named `docs`.
