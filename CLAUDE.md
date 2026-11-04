# hollandneurotech.com

Abby Holland's personal site on GitHub Pages (CNAME hollandneurotech.com). Plain static HTML, no build step.

- `index.html` is the single-page site (about, work, writing, cybiosis, reading, faq, contact). JSON-LD Person and FAQPage live in its head; the FAQ JSON-LD must mirror the visible FAQ.
- `styles.css` is the only stylesheet for index.html. Quicksand only, CSS tokens on `:root`, light and dark via prefers-color-scheme, purple accent for links and hover only.
- More reading items are appended at the `READING-LIST` comment in index.html.
- `about.html` and the legal pages (`privacy-policy.html`, `terms-and-conditions.html`, `ai-insights-terms.html`, `mhmda-notice.html`) are noindex redirect stubs; do not delete them.
- `contact.html` still uses `flourish_css.css`; `directory.html` uses `directory.css` and `companies.js`. Leave them alone.
- `cookie-consent.js` gates GA4 and loads in the head of every page. Never add a raw gtag.
- `llms.txt` and `sitemap.xml` are hand-maintained.
