# PGDIGITAL — Developer Portfolio

PGDigital is a static, single-page developer portfolio deployed on GitHub Pages. It presents services, skills, tools, and contact information across six full-page sections.

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
- Content data (facts, services, skills, tools, contact details, social links) loaded from `json/site-data.json`, with the static markup in `index.html` as fallback
- Contact form posting JSON to a configurable endpoint, with honeypot spam trap, native validation, localStorage draft autosave, an offline outbox retried automatically, and a `mailto:` fallback when no endpoint is configured
- Bootstrap Icons for navigation and social interface icons
- Persistent light/dark theme toggle in the header
- Responsive contact layout and normal-flow footer below 768 px

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

Edit `json/contact-form.json` and set `accessKey` to a [Web3Forms](https://web3forms.com/) access key (public by design). While `accessKey` is empty the form keeps the previous `mailto:` behaviour. Any endpoint accepting a JSON `POST` can be used through the `endpoint` field.

## Validation

```powershell
node --check js/custom.js
node --check js/data.js
node --check js/scripts.js
node --check js/cookie_consent.js
npx --yes html-validate@latest index.html
```

Also smoke-test desktop and mobile layouts, especially the six navigation anchors, mobile menu, carousels, contact form, external CDN resources, and the Contact view at 390 x 844.

## Documentation

- [Technical documentation](docs/documentation.md)
- [Project structure](docs/structure.md)
- [Project tasks](docs/tasks.md)
- [Experiment log](docs/labo.md)

## Current Limitations

- Contact submission falls back to the visitor's email client until a form endpoint access key is configured.
- Content changes must be mirrored in `json/site-data.json` and in the static fallback markup.
- Social links are placeholders.
- `js/cookie_consent.js` is present but is not loaded by `index.html`.
- The page has basic metadata but no Open Graph, Twitter Card, structured data, sitemap, or `robots.txt` support.

## Contributing and License

This is a private portfolio project and is not open to external contributions. All rights are reserved by the author.

[View PGDigital](https://patrickgagli.github.io/pgdigital/)
