# SauceDemo Cypress Automation Challenge

This repository contains the automated test suite for the [SauceDemo](https://www.saucedemo.com/v1/) e-commerce application, developed as part of a technical challenge. The solution uses **Cypress** with JavaScript and follows the **Page Object Model (POM)** design pattern.

## Features

*   **End-to-End Testing**: Covers Login, Inventory, Cart, and Checkout flows.
*   **Page Object Model (POM)**: Tests are decoupled from page selectors for better maintainability.
*   **Data-Driven**: Uses Cypress Fixtures (`products.json`, `users.json`, `checkout.json`) for test data.
*   **CI/CD Integrated**: Includes GitHub Actions workflow for automated execution on push and pull requests.
*   **Artifacts**: Automatically captures screenshots on failure and videos of test runs.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or higher)
*   npm (included with Node.js)
*   Git

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd saucedemo-cypress-e2e
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Tests

### Headless Mode (CI Style)
To run all tests in the terminal without opening the browser:
```bash
npx cypress run
```

### Interactive Mode
To open the Cypress Test Runner and watch tests execute visually:
```bash
npx cypress open
```

### Running Specific Tests
To run a specific spec file (e.g., checkout):
```bash
npx cypress run --spec "cypress/e2e/checkout.cy.js"
```

## Project Structure

```text
saucedemo-cypress-e2e/
├── .github/workflows/   # CI/CD configuration (GitHub Actions)
├── cypress/
│   ├── e2e/             # Test specifications (Login, Products, Cart, Checkout)
│   ├── fixtures/        # Test data (JSON files)
│   ├── pages/           # Page Objects (Selectors & Methods)
│   └── support/         # Custom commands & global configuration
├── cypress.config.js    # Cypress configuration
└── README.md            # Project documentation
```

## CI/CD Pipeline

This project uses **GitHub Actions**. The workflow is defined in `.github/workflows/cypress.yml` and is triggered by:
*   Push to `main`, `master`, or `saucedemo-automation-challenge`.
*   Pull Requests to these branches.
