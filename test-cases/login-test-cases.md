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
