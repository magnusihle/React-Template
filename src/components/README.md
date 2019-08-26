# Components

All the components in a react app should be the representational files in the application. this means the components the user communicates with.

The example below is the login component of the example. The state object is where you store property values that belongs to the component.

Handle change and handleSubmit is functions the application calls from inside the render element of the component. These functions must be defined outside the render, and bound inside the coustructor unless arrow functions is used. An arrow function looks like this: `handlechange = (event) => { logic }`

Iside the render the components props is often spesified for easier access. In the example below `const { loggingIn } = this.props;`can be accessed inside the return as logginIn, without this it has to be accessed by `this.props.loggingIn`

Inside the `return()` the visual logic is implemented. Inline logic can also exist inside of the return. 

```bash
{loggingIn &&
    <img src="data:image/gif;base6..." />
}
```

To call a redux action creator we have to connect the action creator to the component this is done like this in the example below.

```bash
// First import withRouter and connect from react-router-dom and
// react-redux. These imports are used inn exporting and binding the // component.
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Import the actions creator from the actions folder.
import { adminActions } from "../actions/admin-service";

// To access the initial state from the reducer, map the state to a
// prop like this. 
const mapStateToProps = (state) => {
  const { loggingIn } = state.authenticate;
  return { loggingIn };
};

// Then we have to define our actionCreators to access the correct
// action.
const actionCreators = {
  login: adminActions.login,
  logout: adminActions.logout
}

// Last export the function with the action creator.
export default withRouter(connect(mapStateToProps, actionCreators)(LoginPage));
```

Full example class:

```bash
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { adminActions } from "../actions/admin-service";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.props.logout();
    this.state = { username: "", password: "", submitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password } = this.state;
      return (
            <form
              onSubmit={this.handleSubmit}
              noValidate
            >
              <input
                variant="outlined"
                margin="normal"
                required
                label="Email Address"
                name="username"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={this.handleChange}
              />
              <input
                variant="outlined"
                margin="normal"
                required
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign In
              </button>
              {loggingIn &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
            </form>
      );
    }
  }
const mapStateToProps = (state) => {
  const { loggingIn } = state.authenticate;
  return { loggingIn };
};

const actionCreators = {
  login: adminActions.login,
  logout: adminActions.logout
}

export default withRouter(connect(mapStateToProps, actionCreators)(LoginPage));
```
