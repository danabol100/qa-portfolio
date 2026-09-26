### TC-LOGIN-01 — Successful Login

**Priority:** High  
**Type:** Functional  
**Preconditions:**

- User is registered in the system.
- User has valid login credentials.
- Login page is accessible.

**Test Data:**

- Login: `abc`
- Password: `Admin1234`

**Steps:**

1. Open the Login page.
2. Enter `abc`in the **Login** field.
3. Enter `Admin1234` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- User is successfully authenticated.
- User is redirected to the Dashboard page.
- Dashboard is displayed correctly.
- The user can access the products table.

**Postconditions:**

- User is logged in.

**Actual Result:**

- User is successfully authenticated.
- User is redirected to the Dashboard page.
- Dashboard is displayed correctly.
- The user can access the products table.

**Status:**
Passed

### TC-LOGIN-02 — Login with less than minimum characters

**Priority:** High  
**Type:** Functional  
**Preconditions:**

- User is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: `aa`
- Password: `Admin1234`

**Steps:**

1. Open the Login page.
2. Enter `aa` in the **Login** field.
3. Enter `Admin1234` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The Login field is not accepted because it contains fewer than 3 characters.
- A validation message is displayed indicating that the Login field requires at least 3 characters.
- The user remains on the Login page.
- The user is not authenticated.

**Actual Result:**

- The Login field is not accepted because it contains fewer than 3 characters.
- A validation message is displayed indicating that the Login field requires at least 3 characters.
- The user remains on the Login page.
- The user is not authenticated.

  **Status:**
  Passed

### TC-LOGIN-03 — Login with exactly minimum characters

**Priority:** High  
**Type:** Functional  
**Preconditions:**

- User with a 3-character login is registered in the system.
- Login page is accessible.
  **Test Data:**

- Login: `abc`
- Password: `Admin1234`

**Steps:**

1. Open the Login page.
2. Enter a `abc` in the **Login** field.
3. Enter a `Admin1234` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The Login field accepts the value abc.
- No validation error about the minimum Login length is displayed.
- The user is successfully authenticated.
- The user is redirected to the Dashboard page.
  **Actual Result:**

- The Login field accepts abc.
- No validation error about the minimum Login length is displayed.
- The user is successfully authenticated.
- The user is redirected to the Dashboard page.

  **Status:**
  Passed

### TC-LOGIN-04 - Password with less than minimum length

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User with login `abc` is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: `abc`
- Password: `Less123`

**Steps:**

1. Open the Login page.
2. Enter a `abc` in the **Login** field.
3. Enter `Less123` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The Password field is not accepted because it contains fewer than 8 characters.
- A validation message is displayed indicating that the Password field requires at least 8 characters.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

- The Password field is not accepted because it contains fewer than 8 characters.
- A validation message is displayed indicating that the Password field requires at least 8 characters.
- The user is not authenticated.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-05 - Password without uppercase letter

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User with login `abc` is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: `abc`
- Password: `password123`

**Steps:**

1. Open the Login page.
2. Enter a `abc` in the **Login** field.
3. Enter `password123` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The Password field is rejected because it does not contain an uppercase letter.
- A validation message is displayed indicating that the Password field requires at least one uppercase letter.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

- The Password field is rejected because it does not contain an uppercase letter.
- A validation message is displayed indicating that the Password field requires at least one uppercase letter.
- The user is not authenticated.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-06 - Password without digit

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User with login `abc` is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: `abc`
- Password: `Password`

**Steps:**

1. Open the Login page.
2. Enter a `abc` in the **Login** field.
3. Enter `Password` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The Password field is rejected because it does not contain a digit.
- A validation message is displayed indicating that the password must contain at least one digit.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

- The Password field is rejected because it does not contain a digit.
- A validation message is displayed indicating that the password must contain at least one digit.
- The user is not authenticated.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-07 - Invalid password meeting password requirements

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User with login `abc` is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: `abc`
- Password: `Passwor1`

**Steps:**

1. Open the Login page.
2. Enter a `abc` in the **Login** field.
3. Enter `Passwor1` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The password passes all validation requirements: it contains exactly 8 characters, at least one uppercase letter, and at least one digit.
- No password validation error is displayed.
- The user is not authenticated.
- An "Invalid credentials" message is displayed.
- The user remains on the Login page.

**Actual Result:**

- The password passes all validation requirements: it contains exactly 8 characters, at least one uppercase letter, and at least one digit.
- No password validation error is displayed.
- The user is not authenticated.
- An "Invalid credentials" message is displayed.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-08 — Empty Login field

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: [empty]
- Password: `Admin1234`

**Steps:**

1. Open the Login page.
2. Leave the Login field empty.
3. Enter `Admin1234` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The validation message is displayed indicating that the Login field is required.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

- The validation message is displayed indicating that the Login field is required.
- The user is not authenticated.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-09 — Empty Password field

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: abc
- Password: [empty]

**Steps:**

1. Open the Login page.
2. Enter `abc` in the Login field.
3. Leave the Password field empty.
4. Click the **Login** button.

**Expected Result:**

- A validation message is displayed indicating that the Password field is required.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

- A validation message is displayed indicating that the Password field is required.
- The user is not authenticated.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-10 — Both Login and Password fields are empty.

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: [empty]
- Password: [empty]

**Steps:**

1. Open the Login page.
2. Leave the Login field empty.
3. Leave the Password field empty.
4. Click the **Login** button.

**Expected Result:**

- A validation message is displayed indicating that the Login field is required.

- A validation message is displayed indicating that the Password field is required.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

- A validation message is displayed indicating that the Login field is required.

- A validation message is displayed indicating that the Password field is required.
- The user is not authenticated.
- The user remains on the Login page.

  **Status:**
  Passed

### TC-LOGIN-11 — Login with three whitespace characters

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is registered in the system.
- Login page is accessible.

**Test Data:**

- Login: three whitespace characters
- Password: `Admin1234`

**Steps:**

1. Open the Login page.
2. Enter three whitespace characters in the Login field.
3. Enter `Admin1234` in the **Password** field.
4. Click the **Login** button.

**Expected Result:**

- The Login field rejects whitespace-only input.
- The validation message is displayed indicating that the Login field cannot contain only whitespace characters.
- The user is not authenticated.
- The user remains on the Login page.

**Actual Result:**

-Three whitespace characters pass the Login field validation.

**Status:**
Failed

### TC-PRODUCT-01 — Add product with all required fields

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter 10 in the Quantity field.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- The product is successfully added.
- No validation errors are displayed.
- The newly added product appears in the Products table.
- The product contains entered Category, Name, Quantity and Price.
- PhotoURL and Description fields can remain empty.

**Actual Result:**

- The product is successfully added.
- No validation errors are displayed.
- The newly added product appears in the Products table.
- The product contains entered Category, Name, Quantity and Price.
- PhotoURL and Description fields can remain empty.

  **Status:**
  Passed

### TC-PRODUCT-02 — Add product without Category

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: [empty]
- Name: Keyboard
- Quantity: 10
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Leave the Category field empty.
3. Enter Keyboard in the Name field.
4. Enter 10 in the Quantity field.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Category field is required.
- The product is not added.
- The newly added product does not appear in the Products table.

**Actual Result:**

- A validation message is displayed indicating that the Category field is required.
- The product is not added.
- The newly added product does not appear in the Products table.

  **Status:**
  Passed

### TC-PRODUCT-03 — Add product without Name

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: [empty]
- Quantity: 10
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Leave the Name field empty.
4. Enter 10 in the Quantity field.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Name field is required.
- The product is not added.
- The newly added product does not appear in the Products table.

**Actual Result:**

- A validation message is displayed indicating that the Name field is required.
- The product is not added.
- The newly added product does not appear in the Products table.
  **Status:**
  Passed

### TC-PRODUCT-04 — Add product without Quantity.

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: [empty]
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Leave the Quantity field empty.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Quantity field is required.
- The product is not added.
- The product does not appear in the Products table.

**Actual Result:**

- A validation message is displayed indicating that the Quantity field is required.
- The product is not added.
- The product does not appear in the Products table.
  **Status:**
  Passed

### TC-PRODUCT-05 — Add product without Price.

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: [empty]
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter 10 in the Quantity field.
5. Leave the Price field empty.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Price field is required.
- The product is not added.
- The newly added product does not appear in the Products table.

**Actual Result:**

- A validation message is displayed indicating that the Price field is required.
- The product is not added.
- The newly added product does not appear in the Products table.
  **Status:**
  Passed

### TC-PRODUCT-06 — Add product with negative Quantity

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: -1
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter -1 in the Quantity field.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Quantity field cannot be negative.
- The product is not added.
- The product does not appear in the Products table.

**Actual Result:**

- The product is successfully added with Quantity -1.
- No validation is message displayed.
- The product with Quantity -1 appears in the Products table.

**Status:**
Failed.

### TC-PRODUCT-07 — Add product with negative Price

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity:10
- Price: -1
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter 10 in the Quantity field.
5. Enter -1 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Price field cannot be negative.
- The product is not added.
- The product does not appear in the Product table.

**Actual Result:**

- The product is successfully added with Price -1.
- No validation message displayed.
- The product with Price -1 appears in the Products table.

**Status:**
Failed.

### TC-PRODUCT-08 — Add product with Quantity = 0

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 0
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter 0 in the Quantity field.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- The system accepts 0 as a Quantity value.
- The product is successfully added.
- The product with Quantity 0 appears in the Products table.

**Actual Result:**

- The product is successfully added with Quantity 0.
- No validation message is displayed.
- The product with Quantity 0 appears in the Products table.

**Status:**
Passed.

### TC-PRODUCT-09 — Add product with Price = 0

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 0
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter 10 in the Quantity field.
5. Enter 0 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- The system accepts 0 as a Price value.
- The product is successfully added.
- The product with Price 0 appears in the Products table.

**Actual Result:**

- The product is successfully added with Price 0.
- No validation message is displayed.
- The product with Price 0 appears in the Products table.

**Status:**
Passed.

### TC-PRODUCT-10 — Add product with decimal Quantity

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- Add product form is available.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 1.5
- Price: 49.99
- Photo URL: [empty]
- Description: [empty]
  **Steps:**

1. Click the Add Product button.
2. Enter Electronics in the Category field.
3. Enter Keyboard in the Name field.
4. Enter 1.5 in the Quantity field.
5. Enter 49.99 in the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Quantity must be a whole number.
- The product is not added.
- The product does not appear in the Products table.
  **Actual Result:**

- The product is successfully added with Quantity 1.5.
- No validation message is displayed.
- The product with Quantity 1.5 appears in the Products table.

**Status:**
Failed.

### TC-PRODUCT-11 — Edit all product fields

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Clothes
- Name: Shorts
- Quantity: 4
- Price: 10
- Photo URL: [empty]
- Description: [empty]

  **Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to 4.
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- The product is successfully updated.
- The updated Category, Name, Quantity, and Price are displayed in the Products table.

**Actual Result:**

- The product is successfully updated.
- The updated Category, Name, Quantity, and Price are displayed in the Products table.

  **Status:**
  Passed

### TC-PRODUCT-12 — Edit without Category

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: [empty]
- Name: Shorts
- Quantity: 4
- Price: 10
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Clear the Category field.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to 4.
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Category field is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.

**Actual Result:**

- A validation message is displayed indicating that the Category field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.

  **Status:**
  Passed

### TC-PRODUCT-13 — Edit without Name

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: [empty]
- Quantity: 4
- Price: 10
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Clear the Name field.
4. Change the Quantity from 10 to 4.
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Name field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.

**Actual Result:**

- A validation message is displayed indicating that the Name field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.
  **Status:**
  Passed

### TC-PRODUCT-14 — Edit without Quantity

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: Shorts
- Quantity: [empty]
- Price: 10
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Clear the Quantity field
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Quantity field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.

**Actual Result:**

- A validation message is displayed indicating that the Quantity field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.
  **Status:**
  Passed

### TC-PRODUCT-15 — Edit without Price

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: Shorts
- Quantity: 4
- Price: [empty]
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to 4.
5. Clear the Price field.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Price field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.

**Actual Result:**

- A validation message is displayed indicating that the Price field
  is required.
- The product is not updated.
- The product does not appear in the Products table with the new values.
  **Status:**
  Passed

### TC-PRODUCT-16 — Edit with negative Quantity

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: Shorts
- Quantity: -1
- Price: 10
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to -1.
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Quantity cannot be negative.
- The product is not updated.
- The product does not appear in the Products table with the new values.

  **Actual Result:**

The product is successfully updated with Quantity -1.
No validation message is displayed.
The product appears in the Products table with Quantity -1.

**Status:**
Failed

### TC-PRODUCT-17 — Edit with negative Price

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: Shorts
- Quantity: 4
- Price: -1
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to 4.
5. Change the Price from 49.99 to -1.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Price cannot be negative.
- The product is not updated.
- The product does not appear in the Products table with the new values.

  **Actual Result:**

- The product is successfully updated with Price -1.
- No validation message is displayed.
- The product appears in the Products table with Price -1.
  **Status:**
  Failed

### TC-PRODUCT-18 — Edit with Quantity=0

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: Shorts
- Quantity: 0
- Price: 10
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to 0.
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- The product is successfully updated.
- No validation message is displayed.
- The product appear in the Products table with Quantity = 0.

**Actual Result:**

- The product is successfully updated.
- No validation message is displayed.
- The product appear in the Products table with Quantity = 0.

  **Status:**
  Passed

### TC-PRODUCT-19 — Edit with decimal Quantity

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Test Data:**

- Category: Electronics
- Name: Keyboard
- Quantity: 10
- Price: 49.99

New values:

- Category: Clothes
- Name: Shorts
- Quantity: 1.5
- Price: 10
- Photo URL: [empty]
- Description: [empty]

**Steps:**

1. Click the Edit button for the product.
2. Change the Category from Electronics to Clothes.
3. Change the Name from Keyboard to Shorts.
4. Change the Quantity from 10 to 1.5.
5. Change the Price from 49.99 to 10.
6. Leave the Photo URL field empty.
7. Leave the Description field empty.
8. Click the Submit button.

**Expected Result:**

- A validation message is displayed indicating that the Quantity must be a whole number.
- The product is not updated.
- The product does not appear in the Products table with Quantity 1.5.

  **Actual Result:**

- The product is successfully updated with Quantity 1.5.
- No validation message is displayed.
- The product appears in the Products table with Quantity 1.5.
  **Status:**
  Failed

### TC-PRODUCT-20 — Delete existing product

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- An existing product is available in the Products table.

**Steps:**

1. Click the Delete button for the product.
2. Observe the Products table.

**Expected Result:**

- The product is successfully deleted.
- The deleted product does not appear in the Products table.

**Actual Result:**

- The product is successfully deleted.
- The deleted product does not appear in the Products table.

  **Status:**
  Passed

### TC-PRODUCT-21 — Open product catalog

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Dashboard page is open.
- At least one product exists in the Products table.

  **Steps:**

1. Click on Preview button.

**Expected Result:**

- The user is redirected to the product Catalog.
- The added product is displayed in the product catalog.

### TC-PRODUCT-22 — Product card displays product information

**Priority:** High  
**Type:** Functional

**Preconditions:**

- User is logged in.
- Catalog page is open.
- At least one product exists in the Products table.

**Steps:**

1. Locate the product card in the catalog.
2. Observe the product card.

**Expected Result:**

- The product card displays the product Name, Description, Price, Quantity, and Image.

**Actual Result:**

- The product card displays the product Name, Description, Price, Quantity, and Image.

  **Status:**
  Passed

### TC-PRODUCT-23 — Product without Photo URL

**Priority:** Medium
**Type:** Functional

**Preconditions:**

- User is logged in.
- Catalog page is open.
- A product without Photo URL exists in the Product table

  **Steps:**

1. Locate the product without Photo URL in the catalog.
2. Observe the product card.

**Expected Result:**

- The product card is displayed.
- The product card displays the Name, Description, Price, and Quantity.
- The image area is displayed as an empty white field.

**Actual Result:**

- The product card is displayed.
- The product card displays the Name, Description, Price, and Quantity.
- The image area is displayed as an empty white field.
  **Status:**
  Passed

### TC-PRODUCT-24 — Product card with Quantity=0

**Priority:** Medium
**Type:** Functional

**Preconditions:**
User is logged in.
Catalog page is open.
A product with Quantity = 0 exists in the Products table.

**Steps:**

1. Locate the product with Quantity=0 in the catalog.
2. Observe the Quantity on the product card.

**Expected Result:**

- The product card displays Quantity as 0

**Actual Result:**

- The product card displays Quantity as 0.
  **Status:**
  Passed
