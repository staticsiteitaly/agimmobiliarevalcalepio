# agimmobiliarevalcalepio

Jekyll website for Ag. Immobiliare VALCALEPIO.

Live at [https://agenziavalcalepio.bg.it/](https://agenziavalcalepio.bg.it/)

## Technical notes

### Hosting

The site is hosted on GitHub Pages using the standard (dependency-based) version of Jekyll.

Local development requires [Jekyll](https://github.com/jekyll) and [staticsiteitaly/gulp](https://github.com/staticsiteitaly/gulp) installed on your machine.

### GitHub Actions

The following workflows run automatically:

1. Deploy and property scraper (`.github/workflows/scheduled-github-pages-build.yml`)

   Triggers on push to `master`, manually, and on a schedule twice a day. Before building the site it runs a Python script that scrapes the latest property listings from the agency website and writes them to `_data/properties-api.json`, which Jekyll uses at build time to render the listings page.

2. Keepalive (`.github/workflows/scheduled-github-actions-keepalive.yml`)

   Runs on the 1st of each month. Internally documented.
