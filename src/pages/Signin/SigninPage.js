import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SigninForm from './components/SigninForm';

import logoCompany from '../../static/img/slotegrator.webp';

const useStyles = makeStyles(() => ({
  wrapper: {
    height: 'calc(100vh - 65px)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#4776E6' /* fallback for old browsers */,
    background: 'linear-gradient(to right, #8E54E9, #4776E6)',
  },
  logoWrap: {
    width: '200px',
    marginRight: '213px',
  },
  logo: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

const SigninPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper} data-testid="signin-page">
        <div className={classes.logoWrap}>
          <img className={classes.logo} src={logoCompany} alt="Logo Company" />
        </div>
        <SigninForm />
      </div>
    </>
  );
};

export default SigninPage;
