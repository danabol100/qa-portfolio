# BUG-003 — Add product with negative Price

## Steps to Reproduce

1. Click the Add Product button.
2. Enter `Electronics` in the Category field.
3. Enter `Keyboard` in the Name field.
4. Enter `10` in the Quantity field.
5. Enter `-1` in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

## Expected Result

- A validation message is displayed indicating that the Price field cannot be negative.
- The product is not added.
- The product does not appear in the Products table.

## Actual Result

- The product is successfully added with Price `-1`.
- No validation message is displayed.
- The product with Price `-1` appears in the Products table.

## Severity

Medium

## Priority

Medium

## Evidence

### Request Payload

![Request payload with negative Price](../evidence/BUG-002/request-payload.png)

### Products Table

![Product with negative Price in Products table](../evidence/BUG-002/negative-price-product.png)
