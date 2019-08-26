# Containers

Containers folder includes all the files the application that is none presentational in the application.

## App

The `app.js` file contains the application initilizer usually it just contains the `Header.js` component and the `Home.js` component.

Example:

```bash
//  React
import React from 'react'
import { connect } from 'react-redux'

const App = ({actions, children}) => (
  <div>
     <Home />
  </div>
)

const mapStateToProps = state => ({
    //  If there are any Redux loading or so on that should be
    //  initiated in the app.js file.
})

export default connect(
  mapStateToProps,
)(App)
```

## Private route

The private route is if you have some endpoints in your application you wish to have protected. Usually an app has a Login and register page which is open for everyone and the main content of the application is protected behind a private route.

In the example below the routes are protected by jason web tokens. 

Example:
```bash
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('admin')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
```

## Root

The Root.js file contains the application routes. In the example below we use Route and Private route the file we created above to seal off some of the information on the page.

```bash
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './App';
import LoginPage from '../components/LoginPage';
import { PrivateRoute } from './PrivateRoute';


const Root = ({ store }) => (
  <Provider store={store}>
    <React.Fragment>
      <PrivateRoute path="/" component={App} exact/>
      <Route path="/login" component={LoginPage} />
    </React.Fragment>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
export default Root
```
