import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './App';
import LoginPage from '../components/Login';
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
