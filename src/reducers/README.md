# Reducers

All your [redux reducers](https://redux.js.org/basics/reducers) go inside the reducers folder alongside an `index.js` file.

## Login Reducer

The login reducer contains our login logic. We store the JWT we recieve from the backend in the `localStorage`. Then change the initial state if the user was successfyly logged in.

Example:

```bash
import * as AT from '../constants/ActionTypes';

let admin = JSON.parse(localStorage.getItem('admin'));
const initialstate = admin ? {loggedIn: true, admin}: {};

export function authenticate(state = initialstate, action){
    switch(action.type) {
        case AT.LOGIN_REQUEST:
            return {
                loggingIn: true,
                admin: action.admin
            };
        case AT.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                admin: action.admin
            };
        case AT.LOGIN_FAILURE:
            return {};
        default: 
            return state
    }
}
```

## Index

Usually there are more than one reducer. These reducers will have to be connected to the `redux-store`.

Example:

```bash
import { combineReducers } from 'redux'
import { authenticate } from './admin-reducer';

const rootReducer = combineReducers({
  authenticate
})

export default rootReducer
```
