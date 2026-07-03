# OWASP Juice Shop QA Automation Portfolio

## About the Project

This repository contains my QA Automation portfolio based on OWASP Juice Shop.

The goal is not just to build automated tests, but to show how I approach QA in a real project. It covers the entire process, from understanding the application and documenting the requirements to designing test cases, reporting bugs, and building UI and API automation.

---

## Project Goals

* Build a professional QA Automation portfolio.
* Document the QA process from analysis to automation.
* Create clear and organized test documentation.
* Automate the scenarios that provide the most value.
* Apply QA best practices throughout the project.

---

## Current Status

Development started in June 2026.

The project is currently focused on building the QA documentation before starting automation.

---

## Test Scope

This project focuses on the main business features of OWASP Juice Shop.

Informational pages and secondary features are outside the current scope.

---

## QA Approach

I want this project to reflect how a QA works in a real project.

Every test starts with understanding the feature, documenting the requirements, designing the test cases, and then deciding what is worth automating.

Automation is the result of the process, not the starting point.

---

## Repository Structure

```text
juice-shop-portfolio/
│
├── Docs/
│   └── qa/
│       ├── bugs/
│       ├── evidence/
│       ├── requirements/
│       │   └── REQ-01-Authentication.md
│       ├── strategy/
│       └── test-cases/
│           └── juice-shop-test-cases.xlsx
│
├── cypress/
│   └── e2e/
│       └── juice-shop.cy.js
│
├── docker-compose.yml
├── package.json
├── package-lock.json
├── cypress.config.js
├── README.md
├── checkpoint.txt
└── prompt.txt
```

---

## Tools & Technologies

* Cypress for UI test automation.
* Postman and Newman for API testing.
* Docker to run OWASP Juice Shop.
* Git and GitHub for version control.
* Markdown for project documentation.

---

## Documentation

The project documentation includes:

* Project Scope
* Test Strategy
* Requirements
* Test Cases
* Bug Reports
* Test Evidence

---

## Automation

Automation is only one part of this project.

I don't automate every test case. I automate the scenarios that provide the most value, are repeatable, or help detect regressions quickly.

Every automated test can be traced back to a requirement and a test case.

---

## Running the Project

1. Clone the repository.
2. Install the project dependencies.
3. Start OWASP Juice Shop using Docker.
4. Run the Cypress tests.

---

## Next Steps

* Complete the project documentation.
* Expand the UI test coverage.
* Add API test automation.
* Improve traceability between requirements, test cases, and automation.
* Publish execution reports and testing evidence.

