# Playwright Automation Tool - Day -1 Notes

## What is Playwright?

Playwright is a free, open-source automation framework created by Microsoft.
It can automate modern web applications in both **headless** and **headed**
modes.

Playwright supports:

- Chromium, Firefox, and WebKit browsers
- JavaScript/TypeScript, Python, Java, and .NET (C#)
- Windows, macOS, and Linux
- Desktop browsers and mobile **web** browser emulation
- Web UI, mobile web, and API testing

## Key features

1. Cross-browser, cross-platform, and multi-language support.
2. Built-in HTML reports and support for custom reporters, including CI
   reporting integrations.
3. Automatic waiting for elements and page actions, which helps reduce flaky
   tests.
4. Support for CI/CD pipelines and Docker.
5. Test recording and debugging tools, including the Inspector and Trace Viewer.
6. Parallel test execution.
7. Built-in assertions for comparing actual and expected results.
8. Test retries, screenshots, videos, and traces for failed tests.
9. `storageState` support for saving an authenticated browser state and
   avoiding repeated logins.
10. API testing through Playwright's request fixtures and API request context.

## Limitations

- Internet Explorer is not supported.
- Playwright automates web applications and mobile websites. It does not
  automate native Android/iOS applications or native desktop applications.
- Mobile testing is provided through device and viewport emulation; it is not
  the same as testing on every physical mobile device.

## Installation

### Prerequisites

- Node.js and npm
- VS Code or another IDE

### Option 1: Install from the terminal

1. Create a project folder and open it in VS Code.
2. Open the terminal and run:

   ```bash
   npm init playwright@latest
   ```

3. Choose TypeScript or JavaScript, the test folder, and the browsers when
   prompted.
4. Check the installed Playwright version:

   ```bash
   npx playwright --version
   ```

### Option 2: Install through the VS Code extension

1. Create a project folder and open it in VS Code.
2. Install the **Playwright Test for VS Code** extension from Microsoft.
3. Open **View > Command Palette**.
4. Run **Test: Install Playwright**.
5. Select the browsers to install.

## Writing the first Playwright test

1. Open the `tests` directory.
2. Create a file with the `.spec.ts` extension, such as
   `opening-application.spec.ts`.
3. Import `test` and `expect` from `@playwright/test`.
4. Define a test and use the `page` fixture.

```ts
import { expect, test } from '@playwright/test';

test('opening the application', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
```

`await` waits for each asynchronous Playwright operation to complete. The
`page` fixture is created and cleaned up by the Playwright test runner.

## Running tests

Run one test file:

```bash
npx playwright test tests/opening-application.spec.ts
```

Run all tests:

```bash
npx playwright test
```

Tests run headlessly by default unless the configuration or command changes
that behavior. Tests run once for each configured project. For example, a
Chromium and Firefox project would run the test in both browsers.

Useful commands:

```bash
# Run with the browser visible
npx playwright test --headed

# Open the HTML report after a test run
npx playwright show-report

# Run with the Playwright Inspector
npx playwright test --debug
```

## Manual browser launch

The Playwright test runner normally provides the `page` fixture and manages the
browser lifecycle. When using another test framework, or when custom browser
management is required, a browser can be launched manually.

The usual sequence is:

1. Import a browser, such as `chromium`, `firefox`, or `webkit`.
2. Launch the browser.
3. Create an isolated browser context.
4. Create a page.
5. Navigate and interact with the page.
6. Close the browser in the cleanup step.

```ts
import { chromium, expect, test } from '@playwright/test';

test('launching Microsoft Edge manually', async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');

  await browser.close();
});
```

Each browser context is an isolated session with its own cookies, local
storage, and permissions.

### Persistent browser context

Use `launchPersistentContext` when a persistent user-data directory is needed.
The returned object is a browser context, so a page can be obtained from its
existing pages or created with `newPage()`.

```ts
import { chromium, expect, test } from '@playwright/test';

test('launching a persistent Edge context', async () => {
  const context = await chromium.launchPersistentContext('', {
    channel: 'msedge',
  });
  const page = context.pages()[0] ?? await context.newPage();

  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');

  await context.close();
});
```

Use a dedicated user-data directory for reliable persistent sessions. Do not
use a profile directory that is already open in another browser process.

## Playwright locators

Locators identify and interact with elements. Prefer user-facing locators,
especially `getByRole`, `getByLabel`, and `getByText`, because they are usually
more resilient to implementation changes.

### `getByText`

Finds an element by visible text. Matching is not necessarily exact unless
`exact: true` is specified.

```html
<button>Submit</button>
```

```ts
await page.getByText('Submit', { exact: true }).click();
```

### `getByLabel`

Finds a form control through its visible label or an `aria-label`.

```html
<label for="password">Password</label>
<input id="password" type="password" name="password">
```

```ts
await page.getByLabel('Password').fill('secret');
```

It also works with accessible labels:

```html
<input aria-label="Search field" type="text">
```

```ts
await page.getByLabel('Search field').fill('Playwright');
```

### `getByPlaceholder`

Finds an input by its placeholder:

```html
<input type="text" placeholder="Search for something">
```

```ts
await page.getByPlaceholder('Search for something').fill('Playwright');
```

### `getByAltText`

Finds images and other elements by their `alt` text:

```html
<img src="mountain.jpg" alt="Mountain landscape during sunset">
```

```ts
await page.getByAltText('Mountain landscape during sunset').click();
```

### `getByTitle`

Finds an element by its `title` attribute:

```html
<button title="Submit the form">Submit</button>
```

```ts
await page.getByTitle('Submit the form').click();
```

### `getByTestId`

Finds an element by its `data-testid` attribute:

```html
<div data-testid="message">Success</div>
```

```ts
await expect(page.getByTestId('message')).toHaveText('Success');
```

### `getByRole`

Finds an element through its accessible ARIA role and name. Common roles
include `button`, `link`, `heading`, `textbox`, `checkbox`, and `dialog`.

```ts
await page.getByRole('link', { name: 'Gmail', exact: true }).click();
```

## Resolving “No tests found”

Check the following:

1. The file name uses a supported test pattern, such as `.spec.ts` or
   `.test.ts`.
2. The file is inside the configured test directory. This project uses
   `tests` through `testDir` in `playwright.config.ts`.
3. The command includes the correct relative path and file name.
4. The test file imports `test` from `@playwright/test`.
5. The test is not excluded by a configuration or command-line filter.

If tests are stored somewhere else, update `testDir` in the Playwright
configuration or pass the correct test path to the command.

## Browser size and maximizing the window

Playwright does not provide a browser `maximize()` method. The recommended
approach is to set the viewport size explicitly:

```ts
import { test } from '@playwright/test';

test.use({ viewport: { width: 1536, height: 864 } });
```

To use the available browser window size instead, set the viewport to `null`
in the configuration:

```ts
use: {
  viewport: null,
}
```

This uses the browser window dimensions rather than simulating a fixed
viewport. Fixed viewport sizes are generally more predictable in CI.
