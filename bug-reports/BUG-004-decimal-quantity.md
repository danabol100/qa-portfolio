# BUG-004 Add product with decimal Quantity.

## Steps to Reproduce

1. Click the Add Product button.
2. Enter `Electronics` in the Category field.
3. Enter `Keyboard` in the Name field.
4. Enter `1.5` in the Quantity field.
5. Enter `49.99` in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

## Expected Result

- A validation message is displayed indicating that the Quantity must be a whole number.
- The product is not added.
- The product does not appear in the Products table.

## Actual Result

- The product is successfully added with Quantity `1.5`.
- No validation message is displayed.
- The product with Quantity `1.5` appears in the Products table.

## Severity

Medium

## Priority

Medium

## Evidence

### Request Payload

![Request payload with decimal Quantity](../evidence/BUG-002/request-payload.png)

### Products Table

![Product with decimal Quantity in Products table](../evidence/BUG-002/decimal-quantity-product.png)
