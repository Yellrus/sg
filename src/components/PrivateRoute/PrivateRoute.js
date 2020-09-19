import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectIsLoggedIn } from '../../modules/auth';

const PrivateRoute = ({ component: RouteComponent, isLoggedIn, ...rest }) => {
  const renderRouteComponent = (props) =>
    isLoggedIn ? <RouteComponent {...props} /> : <Redirect to="/login" />;

  return (
    <Route
      {...rest}
      render={(routeProps) => renderRouteComponent(routeProps)}
    />
  );
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default connect(mapStateToProps)(PrivateRoute);
