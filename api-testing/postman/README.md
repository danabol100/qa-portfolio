# API Testing — Online Store

API testing was performed using Postman to verify the authentication API and product API of the Online Store application.

## Scope

The following API functionality was tested.

### Authentication API

- Login with valid credentials
- Login with invalid credentials
- Get authenticated user profile
- Logout

### Products API

- Get products
- Create product with valid data
- Update product with valid data
- Delete product
- Create product with negative quantity
- Create product with negative price
- Create product with decimal quantity
- Update product with negative quantity

## API Endpoints

### Authentication

| Method | Endpoint   | Description                    |
| ------ | ---------- | ------------------------------ |
| POST   | `/login`   | User authentication            |
| GET    | `/profile` | Get authenticated user profile |
| POST   | `/logout`  | User logout                    |

### Products

Product API is provided by MockAPI.

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | `/items/`     | Get all products |
| POST   | `/items/`     | Create a product |
| PUT    | `/items/{id}` | Update a product |
| DELETE | `/items/{id}` | Delete a product |

## Test Results

| Test                               | Expected Result            | Actual Result             | Status |
| ---------------------------------- | -------------------------- | ------------------------- | ------ |
| Login — valid credentials          | User is authenticated      | Authentication successful | Passed |
| Login — invalid credentials        | Authentication is rejected | `401 Unauthorized`        | Passed |
| Profile — authenticated user       | User profile is returned   | `200 OK`                  | Passed |
| Logout                             | Session is terminated      | `200 OK`                  | Passed |
| Get products                       | Product list is returned   | `200 OK`                  | Passed |
| Create product — valid data        | Product is created         | `201 Created`             | Passed |
| Update product — valid data        | Product is updated         | `200 OK`                  | Passed |
| Delete product                     | Product is deleted         | `200 OK`                  | Passed |
| Create product — negative quantity | Request should be rejected | `201 Created`             | Failed |
| Create product — negative price    | Request should be rejected | `201 Created`             | Failed |
| Create product — decimal quantity  | Request should be rejected | `201 Created`             | Failed |
| Update product — negative quantity | Request should be rejected | `200 OK`                  | Failed |

## Key Findings

The product API accepts invalid product values without validation errors.

The following cases were reproduced:

- Negative quantity is accepted when creating a product.
- Negative price is accepted when creating a product.
- Decimal quantity is accepted when creating a product.
- Negative quantity is accepted when updating an existing product.

These API findings are consistent with the validation issues identified during UI testing.

## Evidence

Selected Postman test results are available below:

- [Login — Valid Credentials](screenshots/login-valid.png)
- [Login — Invalid Credentials](screenshots/login-invalid.png)
- [Get Products](screenshots/get-products.png)
- [Create Product — Valid Data](screenshots/create-valid.png)
- [Create Product — Negative Quantity](screenshots/negative-quantity.png)

## Postman Collection

The complete Postman collection is available here:

[Online Store API — Postman Collection](api-testing/postman/Online-Store-API.postman_collection.json)

## Tools

- Postman
- REST API
- MockAPI
- Node.js / Express
- MongoDB Atlas
- Render
- Vercel

## Notes

This API testing was performed as part of a diploma QA portfolio project.

The collection contains both positive and negative API test scenarios and demonstrates basic API request validation, response verification, authentication testing, and CRUD testing.
