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
- Client-side contact form using native validation and a prefilled `mailto:` link
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

## Validation

```powershell
node --check js/custom.js
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

- Contact submission depends on the visitor having a configured email client.
- Social links are placeholders.
- `js/cookie_consent.js` is present but is not loaded by `index.html`.
- The page has basic metadata but no Open Graph, Twitter Card, structured data, sitemap, or `robots.txt` support.

## Contributing and License

This is a private portfolio project and is not open to external contributions. All rights are reserved by the author.

[View PGDigital](https://patrickgagli.github.io/pgdigital/)
