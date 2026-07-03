# TEST STRATEGY

## 1. Purpose

Define the overall testing approach for the OWASP Juice Shop QA Automation project.

This strategy explains how testing is planned, designed, and executed across the system.

---

## 2. Testing Levels

Testing is structured in the following levels:

* Functional testing of core features
* UI testing through Cypress automation
* API testing using Postman and Newman

---

## 3. Test Design Approach

All tests are designed starting from requirements.

Each test follows this flow:

* Understand the feature
* Analyze expected behavior
* Define test cases
* Identify what should be automated

---

## 4. Automation Strategy

Automation is applied only to stable and repeatable scenarios.

Priority is given to:

* Critical user flows
* High-risk functionalities
* Regression-prone areas

UI automation is implemented using Cypress.
API testing is validated using Postman collections executed with Newman.

---

## 5. Test Data Strategy

Test data is managed based on scenario needs.

Where possible, data is reusable and consistent across test executions to ensure stability.

---

## 6. Reporting

Defects are documented when expected behavior does not match actual behavior.

Each bug report includes:

* Steps to reproduce
* Expected result
* Actual result
* Evidence when available

---

## 7. Traceability

Every automated test is linked back to:

* A requirement
* A test case

This ensures full traceability across the QA process.
