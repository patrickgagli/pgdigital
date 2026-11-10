# PGDIGITAL — DevOps Portfolio

PGDigital is a static, single-page portfolio deployed on GitHub Pages. Its product direction is to present Patrick G. as a DevOps professional, supported by verified skills and authorized project case studies. The current visible content still largely describes generalist web development; the repositioning and supporting evidence remain to be validated and implemented. Do not infer experience or tool mastery from technologies listed on the site.

## Technology Stack

- HTML5 and CSS3
- Bootstrap and Bootstrap Icons
- jQuery, fullPage.js, Owl Carousel, and jquery.inview
- Alpine.js for the hero typing effect
- Animate.css for viewport-triggered animations
- Google Fonts (Raleway)

The project has no build step, package manifest, backend, or test runner. Runtime libraries are loaded from local vendored files or public CDNs.

## Features

- Six synchronized navigation anchors: `slide01` through `slide06`
- Full-page desktop navigation with responsive normal scrolling
- Responsive carousels for facts, services, skills, and tools
- Mobile navigation with an accessible expanded state
- Scroll-triggered animations and animated fact counters
- Content data (facts, services, skills, tools, and contact details) loaded from `json/site-data.json`, with the static markup in `index.html` as fallback
- Contact form posting JSON to a configurable endpoint, with honeypot spam trap, native validation, localStorage draft autosave, an offline outbox retried automatically, and a `mailto:` fallback when no endpoint is configured
- Bootstrap Icons for navigation and interface controls
- Persistent light/dark theme toggle in the header
- Responsive contact layout with desktop header/footer clearance and a normal-flow footer below 768 px or 600 px viewport height
- Canonical URL, static Schema.org JSON-LD (`Person`, `WebSite`, `WebPage`), XML sitemap, and a `robots.txt` file (see the GitHub Pages limitation below)
- DevOps-oriented content and project case studies are a product goal, not yet a completed site feature; publish them only after the owner validates claims, evidence, and permissions

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/patrickgagli/pgdigital.git
   cd pgdigital
   ```

2. Open `index.html` directly in a browser. No server or dependency installation is required.

   Browsers block `fetch` on `file://`, so the JSON files are only read when the page is served over HTTP. Opening the file directly falls back to the static markup. To exercise the JSON path locally:

   ```powershell
   npx --yes http-server . -p 8099 -c-1
   ```

## Contact Form Configuration

Edit `json/contact-form.json` to configure the [Web3Forms](https://web3forms.com/) endpoint and public access key. The current configuration targets Web3Forms. If either `endpoint` or `accessKey` is unavailable, the form falls back to `mailto:`. Treat this file as public client-side configuration: never put server secrets in it or copy the access-key value into documentation. Confirm the provider's restrictions, terms, and data handling before changing the production configuration.

## Validation

```powershell
node --check js/custom.js
node --check js/data.js
node --check js/scripts.js
node --check js/cookie_consent.js
npx --yes html-validate@latest index.html
```

Also smoke-test desktop and mobile layouts, especially the six navigation anchors, mobile menu, carousels, contact form, external CDN resources, and the Contact view at 390 x 844.

## Search Engine Indexing

- The canonical URL is `https://patrickgagli.github.io/pgdigital/`.
- [index.html](index.html) embeds a Schema.org JSON-LD graph describing Patrick Gagli, the website, and its single page. It is available without JavaScript execution or JSON fetching, including in the static fallback.
- [sitemap.xml](sitemap.xml) lists only the canonical page. The six section fragments are navigation targets, not separate indexable pages. No speculative modification dates or ranking hints are included.
- [robots.txt](robots.txt) allows crawling and declares the absolute sitemap URL.

**GitHub Pages project-site limitation:** this repository publishes the file at `https://patrickgagli.github.io/pgdigital/robots.txt`, but crawlers only discover robots rules at `https://patrickgagli.github.io/robots.txt`. To activate these rules, the owner must publish them at the origin root through the `patrickgagli.github.io` repository, preserving any rules for other projects. Alternatively, deploy this site at the root of a custom domain. Submit `https://patrickgagli.github.io/pgdigital/sitemap.xml` directly in Google Search Console regardless.

When changing the production URL, update the canonical link and all JSON-LD URLs/identifiers in `index.html`, the URL in `sitemap.xml`, and the sitemap declaration in `robots.txt`. Keep the JSON-LD name, description, and author consistent with the visible content and metadata.

After deployment, check that the canonical page and sitemap return HTTP 200, validate the JSON-LD with the [Schema Markup Validator](https://validator.schema.org/), and verify the origin-root `robots.txt` if configured. Structured data helps describe the page; it does not guarantee indexing or rich search results.

## Documentation

- [Product Requirements Document](docs/Analyse%20Conception/PRD.md)
- [Requirements analysis](docs/Analyse%20Conception/Analyse%20des%20besoins.md)
- [Specifications](docs/Analyse%20Conception/Cahier%20des%20charges.md)
- [UX/UI design](docs/Analyse%20Conception/UX-UI.md)
- [Data and process modeling](docs/Analyse%20Conception/Mod%C3%A9lisation.md)
- [Project tasks and validation status](docs/Analyse%20Conception/Tasks.md)
- [Product backlog](docs/Agile%20Scrum/Scrum%20Product%20Backlog.md)
- [Sprint backlog](docs/Agile%20Scrum/Scrum%20Sprint%20Backlog.md)
- [Roadmap](docs/Agile%20Scrum/Roadmap.md)

## Current Limitations

- The form has a configured external submission endpoint. Its response handling, retention, privacy notice, and production-provider terms still require validation; `mailto:` is a fallback when remote submission is unavailable, not proof that a message was sent.
- Content changes must be mirrored in `json/site-data.json` and in the static fallback markup.
- The JSON-driven social list is empty, but generic social links remain in the static HTML fallback and must be removed or replaced with owner-approved profiles.
- The DevOps repositioning is not complete in the live content. Skills, services, and project case studies must be owner-validated and supported by evidence and publication permission before being presented as facts.
- `js/cookie_consent.js` and `css/cookie_consent.css` are present but are not integrated or loaded by `index.html`; the script also expects a server API that this static site does not provide.
- Open Graph and Twitter Card metadata are not yet implemented.
- The project-level `robots.txt` is not discovered automatically by crawlers on the current GitHub Pages subpath; origin-root configuration is required as described above. Confirm whether it has been published at the origin root before claiming that the rules are active.

## Contributing and License

This is a private portfolio project and is not open to external contributions. All rights are reserved by the author.

[View PGDigital](https://patrickgagli.github.io/pgdigital/)
