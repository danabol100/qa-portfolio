# Test Summary Report

## Project Overview

The Online Store application was tested as part of a QA portfolio project.

Testing covered the main user flows, product management functionality, and backend API behavior.

## Scope

The following areas were tested:

Login
Product creation
Product editing
Product deletion
Product validation
Authentication API
Products API

## UI Test Execution

24 test cases were executed.

| Area     | Test Cases | Passed | Failed |
| -------- | ---------: | -----: | -----: |
| Login    |         11 |     10 |      1 |
| Products |         13 |      7 |      6 |
| Total    |         24 |     17 |      7 |

The 7 failed test cases are related to input validation.

All 7 identified UI defects remained reproducible during retest.

## Defects

7 UI defects were identified and documented.

The following defects were additionally tracked in Jira:

BUG-001 — Login with three whitespace characters

BUG-002 — Add product with negative Quantity

BUG-003 — Add product with negative Price

The Jira defects were moved through the available workflow and retested. All three remained reproducible during retest.

## API Testing

API testing was performed using Postman.

12 API test scenarios were executed.

| Result | Count |
| ------ | ----: |
| Passed |     8 |
| Failed |     4 |

The failed API tests were related to product input validation, including negative and decimal values.

## Conclusion

The main application functionality was tested through UI and API testing.

The testing identified validation issues in both the UI and API layers.

The identified defects were documented in GitHub and Jira, and the Jira defects were retested after the reported fixes.

The reported validation issues remained reproducible during retest.
