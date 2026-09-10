# PGDigital repository instructions

## Project shape

- This is a static, single-page portfolio deployed on GitHub Pages. There is no build step, package manifest, test runner, or backend.
- `index.html` is the application entry point and contains all page sections and content.
- `css/style.css` owns the base visual design. `css/responsive.css` owns viewport-specific overrides.
- `js/custom.js` owns active page behavior: fullPage navigation, Owl Carousel setup, animation triggers, the mobile menu, and contact-form handling.
- `js/data.js` loads JSON content and form configuration before `js/custom.js` initializes the page.
- `js/scripts.js` owns the persistent light/dark theme toggle.
- Files such as `bootstrap.min.*`, `fullpage.min.js`, `owl.carousel.min.js`, and `jquery.js` are vendored dependencies. Do not edit minified vendor files.
- Alpine.js is used for the hero typing effect. The contact form posts JSON to the configured endpoint and falls back to a prefilled `mailto:` URL when no endpoint is configured.
- `js/cookie_consent.js` and `css/cookie_consent.css` are deferred experiments, not active features; do not document them as integrated without adding the required markup and server API.

## Editing conventions

- Keep changes framework-free and compatible with direct `index.html` loading. Do not introduce a build tool for a small change.
- Prefer the existing Bootstrap, Bootstrap Icons, jQuery, fullPage.js, Owl Carousel, Alpine.js, and CSS patterns.
- Keep each `data-section`, fullPage anchor, navigation `data-menuanchor`, and navigation `href` synchronized. There are currently six anchors: `slide01` through `slide06`.
- Preserve French UI copy and UTF-8 accents. Provide useful `alt`, `aria-label`, and form status semantics when changing visible controls.
- Put responsive fixes in `css/responsive.css`. Mobile uses fullPage responsive mode below 768px; account for the fixed header and normal-flow mobile footer.
- Use local assets under `img/` where practical. Verify that every new local `src` or `href` target exists.
- Do not load duplicate versions of libraries. Use Bootstrap Icons for interface icons.

## Validation

There is no automated test suite. Run the available checks after changes:

```powershell
node --check js/custom.js
node --check js/data.js
node --check js/scripts.js
node --check js/cookie_consent.js
npx --yes html-validate@latest index.html
```

Open `index.html` directly in a browser and smoke-test at desktop and mobile widths. Check:

- no console errors or failed local asset requests;
- all six navigation anchors activate the expected section;
- the mobile menu opens, closes, and updates `aria-expanded`;
- carousels, Bootstrap Icons, and hero typing render;
- Contact form required/email validation works and valid submission opens a prefilled email;
- the 390x844 Contact view has no horizontal overflow, clipped heading, or footer/form overlap.
- the JSON-backed page works through HTTP and the static fallback works from `file://`.
