# Module: Authentication & User Access

## 1. Overview
Documenting the core registration and login flows for the Juicy Shop application to ensure secure and reliable user access.

## 2. In Scope
- User Registration flow (new account creation).
- User Login flow (authentication with valid and invalid credentials).
- Basic UI input validation for email and password fields.

## 3. Out of Scope
- Password Reset / "Forgot Password" functionality (out of current module).
- Advanced Security Testing (e.g., SQL Injection, XSS).
- Performance and Load Testing for the authentication endpoints.
- Server-side database validation. 
                                                  
## 4. Business Rules & Validations
- Email must be provided in a standard valid format.
- Password length must be between 5 and 20 characters
- Both email and password are required fields to proceed.
- Unregistered credentials must trigger an appropriate error message.
- Repeat Password field is required during registration.
- Security Question selection is required during registration.
- Security Answer is required during registration.
- Successful registration redirects the user to the login page.











