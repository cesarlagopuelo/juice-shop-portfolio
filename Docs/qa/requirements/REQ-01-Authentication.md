# Module: Authentication & User Access

## 1. Overview

This module covers the user registration and login flows in OWASP Juice Shop to ensure secure and reliable user access.

---

## 2. In Scope

* User registration (account creation)
* User login (authentication with valid and invalid credentials)
* Basic input validation for email and password fields

---

## 3. Out of Scope

* Password recovery ("Forgot Password")
* Security testing (SQL Injection, XSS)
* Performance and load testing

---

## 4. Business Rules & Validations

* Email must follow a valid format
* Password must be between 5 and 20 characters
* Email and password are required fields for login
* Invalid credentials must return an error message
* Repeat Password is required during registration
* Security Question is required during registration
* Security Answer is required during registration
* Successful registration redirects user to login page












