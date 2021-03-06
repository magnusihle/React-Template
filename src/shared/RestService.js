import { authHeader } from '../constants/Authentication'

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

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                //window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
