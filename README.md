# Playwright Automation

This repository contains Playwright tests written in TypeScript.

## Quick start

```bash
npm install
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Project structure

- `tests/` - Playwright test files
- `playwright.config.ts` - test directory, browser, viewport, retries, and
  reporter configuration
- `test-results/` - test artifacts
- `playwright-report/` - HTML report output

## Learning notes

The detailed Day -1 notes cover Playwright features, installation, writing
tests, browser launching, locators, troubleshooting, reports, and viewport
configuration.

See [PLAYWRIGHT_DAY-1_NOTES.md](PLAYWRIGHT_DAY-1_NOTES.md) for the complete
notes.
