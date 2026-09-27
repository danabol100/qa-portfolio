# QA Portfolio — Online Store Web Application

## Project Overview

This repository contains QA documentation for an online store web application developed as part of a diploma project.

The application is built with React and includes user authentication, product management, and a product catalog.

The goal of this portfolio is to demonstrate manual testing skills, test documentation, bug reporting, API testing, and basic analysis of application behavior.

## Live Demo

[Open the application](https://qa-portfolio-five-roan.vercel.app/)

## Application Scope

The following functionality was tested:

- User Login
- Product creation
- Product editing
- Product deletion
- Product catalog
- Product card information
- Product quantity and price validation

## Testing

### Test Cases

A total of **24 test cases** were created and executed.

| Area      | Test Cases | Passed | Failed |
| --------- | ---------: | -----: | -----: |
| Login     |         11 |     10 |      1 |
| Products  |         13 |      7 |      6 |
| **Total** |     **24** | **17** |  **7** |

The application was deployed and the previously identified defects were re-tested. All 7 reported defects remain reproducible.

Test cases:

- [Login Test Cases](test-cases/login-test-cases.md)
- [Product Test Cases](test-cases/product-test-cases.md)

## Bug Reports

A total of **7 defects** were identified during testing.

- [BUG-001 — Login with three whitespace characters](bug-reports/BUG-001-login-whitespace.md)
- [BUG-002 — Add product with negative Quantity](bug-reports/BUG-002-negative-quantity.md)
- [BUG-003 — Add product with negative Price](bug-reports/BUG-003-negative-price.md)
- [BUG-004 — Add product with decimal Quantity](bug-reports/BUG-004-decimal-quantity.md)
- [BUG-005 — Edit product with negative Quantity](bug-reports/BUG-005-edit-negative-quantity.md)
- [BUG-006 — Edit product with negative Price](bug-reports/BUG-006-edit-negative-price.md)
- [BUG-007 — Edit product with decimal Quantity](bug-reports/BUG-007-edit-decimal-quantity.md)

Each bug report contains:

- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Evidence

## Open Questions

Some business rules are not explicitly defined in the application requirements.

- [Open Questions](open-questions/open-questions.md)

Current open questions:

- Should Quantity = 0 be allowed?
- Should Price = 0 be allowed?

## API Testing — Postman

API testing was performed using **Postman**.

The following API functionality was tested:

### Authentication

- Login with valid credentials
- Login with invalid credentials
- Get authenticated user profile
- Logout

### Products

- Get products
- Create product with valid data
- Update product with valid data
- Delete product
- Create product with negative quantity
- Create product with negative price
- Create product with decimal quantity
- Update product with negative quantity

### API Test Results

| Test                               | Result |
| ---------------------------------- | ------ |
| Login — valid credentials          | Passed |
| Login — invalid credentials        | Passed |
| Profile — authenticated user       | Passed |
| Logout                             | Passed |
| Get products                       | Passed |
| Create product — valid data        | Passed |
| Update product — valid data        | Passed |
| Delete product                     | Passed |
| Create product — negative quantity | Failed |
| Create product — negative price    | Failed |
| Create product — decimal quantity  | Failed |
| Update product — negative quantity | Failed |

### Key Findings

The API accepts product values that should be rejected by validation:

- Negative quantity is accepted.
- Negative price is accepted.
- Decimal quantity is accepted.
- Negative quantity can be saved when updating an existing product.

### Postman Collection

- [Online Store API — Postman Collection](api-testing/postman/Online%20Store%20API.postman_collection.json)
- [API Testing Documentation](api-testing/postman/README.md)

### API Testing Evidence

- [Login — Valid Credentials](api-testing/postman/screenshots/login-valid.png)
- [Login — Invalid Credentials](api-testing/postman/screenshots/login-invalid.png)
- [Get Products](api-testing/postman/screenshots/get-products.png)
- [Create Product — Valid Data](api-testing/postman/screenshots/create-valid.png)
- [Create Product — Negative Quantity](api-testing/postman/screenshots/negative-quantity.png)

## Evidence

Screenshots and other testing evidence are stored in the `evidence` directory.

Evidence includes:

- UI screenshots
- Network requests
- Server responses
- Results of invalid input testing

## Testing Approach

The following testing techniques were used:

- Functional Testing
- Positive Testing
- Negative Testing
- Boundary Value Analysis
- Input Validation Testing
- Authentication Testing
- API Testing
- Regression Testing

## Project Structure

```text
qa-portfolio/

├── test-cases/
│   ├── login-test-cases.md
│   └── product-test-cases.md
│
├── bug-reports/
│   ├── BUG-001-login-whitespace.md
│   ├── BUG-002-negative-quantity.md
│   ├── BUG-003-negative-price.md
│   ├── BUG-004-decimal-quantity.md
│   ├── BUG-005-edit-negative-quantity.md
│   ├── BUG-006-edit-negative-price.md
│   └── BUG-007-edit-decimal-quantity.md
│
├── open-questions/
│   └── open-questions.md
│
├── evidence/
│   ├── BUG-001/
│   ├── BUG-002/
│   ├── BUG-003/
│   ├── BUG-004/
│   ├── BUG-005/
│   ├── BUG-006/
│   └── BUG-007/
│
├── api-testing/
│   └── postman/
│       ├── README.md
│       ├── Online Store API.postman_collection.json
│       └── screenshots/
│           ├── login-valid.png
│           ├── login-invalid.png
│           ├── get-products.png
│           ├── create-valid.png
│           └── negative-quantity.png
│
└── README.md
```
