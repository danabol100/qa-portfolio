# BUG-001 — Login with three whitespace characters

## Steps to Reproduce

1. Open the Login page.
2. Enter three whitespace characters in the Login field.
3. Enter `Admin1234` in the **Password** field.
4. Click the **Login** button.

## Expected Result

- The Login field rejects whitespace-only input.
- A validation message is displayed indicating that the Login field cannot contain only whitespace characters.
- The user is not authenticated.
- The user remains on the Login page.

## Actual Result

- Three whitespace characters pass the Login field validation.
- No validation message is displayed.
- The user is not prevented from submitting the form.

## Severity

Medium

## Priority

Medium

## Evidence

- Screenshot showing the Login request in the Network tab with a whitespace-only login.
- Screenshot showing the server response: `{"success":false,"message":"Invalid credentials"}`.

# BUG-001 - Add product with negative Quantity

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

# BUG-005 — Edit product with negative Quantity

## Steps to Reproduce

1. Click the Edit button for the product.
2. Change the Category from `Electronics` to `Clothes`.
3. Change the Name from `Keyboard` to `Shorts`.
4. Change the Quantity from `10` to `-1`.
5. Change the Price from `49.99` to `10`.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

## Expected Result

- A validation message is displayed indicating that the Quantity cannot be negative.
- The product is not updated.
- The product does not appear in the Products table with the new values.

## Actual Result

- The product is successfully updated with Quantity `-1`.
- No validation message is displayed.
- The product appears in the Products table with Quantity `-1`.

## Severity

Medium

## Priority

Medium

## Evidence

# BUG-006 — Edit product with negative Price

## Steps to Reproduce

1. Click the Edit button for the product.
2. Change the Category from `Electronics` to `Clothes`.
3. Change the Name from `Keyboard` to `Shorts`.
4. Change the Quantity from `10` to `4`.
5. Change the Price from `49.99` to `-1`.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

## Expected Result

- A validation message is displayed indicating that the Price cannot be negative.
- The product is not updated.
- The product does not appear in the Products table with the new values.

## Actual Result

- The product is successfully updated with Price `-1`.
- No validation message is displayed.
- The product appears in the Products table with Price `-1`.

## Severity

Medium

## Priority

Medium

## Evidence

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
