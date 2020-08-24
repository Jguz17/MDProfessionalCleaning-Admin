import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser, logoutUser } from '../actions/user';
import Login from './Login';
import SignUp from './SignUp';
import Main from './Main';

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    const token = localStorage.getItem('token');
    if (token) {
      getCurrentUser(token);
    }
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path={'/login'} component={Login} />
          <Route path={'/signup'} component={SignUp} />
          <Route path={'/'} component={Main} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: (token) => dispatch(getCurrentUser(token)),
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);
