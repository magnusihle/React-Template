# Shared

The shared folder is for files used by the whole system. 

## Create browser history

This file is for a npm package called History [Npm documentation](https://www.npmjs.com/package/history).

History is a JavaScript library that lets you easily manage session history anywhere JavaScript runs. history abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

Example:

´´´bash
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
```

## Restservice

Restservice is the component that implements all the REST calls. We call the restservice class from our redux actions.

Example:

```bash
import { authHeader } from '../constants/auth'

const HEADERS = {
    ...authHeader(),
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export class Restservice {

    static postName(url, data) {
        return fetch("/api/v1/" + url, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(data)
        });
    }
}

export const restservice = {
    login,
    logout
}

function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify({ username, password })
    };

    return fetch('/admin/authenticate', requestOptions)
    .then(handleResponse)
    .then(admin => {
        localStorage.setItem('admin', JSON.stringify(admin));
        return admin
    });
}

function logout() {
    localStorage.removeItem('admin');
}
```
