import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, Button } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logOut, selectIsLoggedIn } from '../../modules/auth';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  navItem: {
    color: '#333333',
    'font-size': '16px',
    'font-weight': '400',
    'line-height': '21px',
    marginRight: '5px',
  },
}));

const Header = ({ logOut, isLoggedIn }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" data-testid="header">
      <Container className={classes.root} maxWidth="lg">
        <Toolbar>
          <div className={classes.logo}>Logo Company</div>
          <Button
            data-testid="home-btn"
            className={classes.navItem}
            component={RouterLink}
            to="/"
            color="inherit"
          >
            На главную
          </Button>
          <Button
            data-testid="home-btn"
            className={classes.navItem}
            component={RouterLink}
            to="/users"
            color="inherit"
          >
            Новости
          </Button>
          <Button
            data-testid="profile-btn"
            className={classes.navItem}
            component={RouterLink}
            to="/profile"
            color="inherit"
          >
            Профиль
          </Button>

          {isLoggedIn && (
            <Button
              className={classes.navItem}
              color="inherit"
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: selectIsLoggedIn(state),
});

const mapDispatchToProps = {
  logOut,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(Header);
