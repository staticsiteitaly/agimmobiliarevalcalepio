# agimmobiliarevalcalepio

Jekyll website for Ag. Immobiliare VALCALEPIO.

Live at [https://agenziavalcalepio.bg.it/](https://agenziavalcalepio.bg.it/)

## Technical notes

### Hosting

The site is hosted on GitHub Pages using the standard (dependency-based) version of Jekyll.

Local development requires [Jekyll](https://github.com/jekyll) and [staticsiteitaly/gulp](https://github.com/staticsiteitaly/gulp) installed on your machine.

### Property listings

The listings are not scraped by this repository. An external scraper service reads the agency’s website on a schedule, validates the result and stores it as ready-made JSON. It triggers the deploy workflow only when the listings have actually changed, so the site is rebuilt only when needed.

If the scraped data is invalid, the scraper reports the failure and does not trigger a build, so the published site stays as it is.

### GitHub Actions

The following workflows run automatically:

1. GitHub Pages Build (`.github/workflows/github-pages-build.yml`)

   Triggers on push to `master` and manually. The external scraper service also triggers it when the listings change. Before building the site it downloads the ready-made listings from the scraper service and writes them to `_data/properties-api.json`, which Jekyll uses at build time to render the listings page.

   If the data is incomplete, the build stops with an error and nothing is deployed, so the live site is left untouched.

   Property images are not stored in the repository: the listings page loads them from the original listings through an external image service, which resizes and crops them to 600×600. The image URL is built in the Jekyll template.

   At the end of every run, whether it succeeded or not, it deletes the older runs of this workflow, keeping the latest three. It requires two repository secrets: the scraper service access token and the URL of the stored listings.

2. Scheduled GitHub Actions Keepalive (`.github/workflows/scheduled-github-actions-keepalive.yml`)

   Runs on the 1st of each month and manually. It prevents GitHub from disabling scheduled workflows after a period without repository activity, and in January it also triggers the GitHub Pages Build workflow so the copyright year in the footer is refreshed. It deletes the older runs of this workflow, keeping the latest three, and requires the `PERSONAL_ACCESS_TOKEN` repository secret.
