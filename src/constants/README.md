# Constants

The constants folder contains the js files that holds constant information.

In this example the folder includes:

* [Redux action types](https://redux-resource.js.org/api-reference/action-types).
* Authentication, for authenticating a user.
* Validation options for regex.

## Action types

the action types is an object which the resource reducer responds to. When a action type is dispatched from an action the state changes in the store.

The example below contains the action types dispatched from the login action creator.

Example:

```bash
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT = 'LOGOUT'
```

## Authentication

In this example we are using a JWT (Jason web tokens) to authenticate a user we create a authentication header to send the spesific token with every REST-call. See restservice example in `shared/readme.md`. We then assign the authorisation token in the header as a Bearer token.

Example:

```bash
export function authHeader() {
  let admin = JSON.parse(localStorage.getItem('admin'));

  if (admin && admin.token) {
      return { 'Authorization': 'Bearer ' + admin.token };
  } else {
      return {};
  }
}
```

## Validation

In this example no REGEX is used, but you could easily assign it to a register form.

Example:

```bash
export const required = value => (value ? undefined : "Required");
export const requiredName = value =>
  value && !/^[a-zA-Z ]+$/i.test(value) ? "Invalid Name" : undefined;
export const Number = value =>
  value && !/^[0-9]+$/i.test(value) ? "Invalid Number" : undefined;
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const yourdomain = value =>
  value && !/^[A-Z0-9._%+-]+@(yourdomain\.no)$/i.test(value)
    ? "Invalid email address"
    : undefined;
```
