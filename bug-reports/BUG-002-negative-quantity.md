# BUG-002 - Add product with negative Quantity

## Steps to Reproduce

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter `-1` in the Quantity field.
5. Enter `49.99` in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

## Expected Result

- A validation message is displayed indicating that the Quantity field cannot be negative.
- The product is not added.
- The product does not appear in the Products table.

## Actual Result

- The product is successfully added with Quantity `-1`.
- No validation message is displayed.
- The product with Quantity `-1` appears in the Products table.

## Severity

Medium

## Priority

Medium

## Evidence

### Request Payload

![Request payload with negative Quantity](../evidence/BUG-002/request-payload.png)

### Products Table

![Product with negative Quantity in Products table](../evidence/BUG-002/negative-quantity-product.png)
