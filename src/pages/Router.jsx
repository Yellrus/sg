import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './Signin';
import ProfilePage from './Profile';
import UsersPage from './Users';
import HomePage from './Home';
import PageNotFound from './PageNotFound';
import PrivateRoute from '../components/PrivateRoute';

const RootRouter = ({ isLoggedIn }) => (
  <Switch>
    <Route
      exact
      path="/login"
      render={() => (isLoggedIn ? <Redirect to="/profile" /> : <LoginPage />)}
    />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/users" component={UsersPage} />
    <PrivateRoute exact path="/profile" component={ProfilePage} />

    <Route path="*" component={PageNotFound} />
  </Switch>
);

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(RootRouter);
