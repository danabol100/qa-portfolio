# BUG-007 — Edit product with decimal Quantity

## Steps to Reproduce

1. Click the Edit button for the product.
2. Change the Category from `Electronics` to `Clothes`.
3. Change the Name from `Keyboard` to `Shorts`.
4. Change the Quantity from `10` to `1.5`.
5. Change the Price from `49.99` to `10`.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

## Expected Result

- A validation message is displayed indicating that the Quantity must be a whole number.
- The product is not updated.
- The product does not appear in the Products table with Quantity `1.5`.

## Actual Result

- The product is successfully updated with Quantity `1.5`.
- No validation message is displayed.
- The product appears in the Products table with Quantity `1.5`.

## Severity

Medium

## Priority

Medium

## Evidence

![Request payload with decimal Quantity](../evidence/BUG-002/request-payload.png)

### Products Table

![Product with decimal Quantity Products table](../evidence/BUG-002/decimal-quantity-product.png)
