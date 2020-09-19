import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Paper,
  Button,
  TextField,
  FormGroup,
  Typography,
  Box,
} from '@material-ui/core';

import { useForm } from 'react-hook-form';
import { logInRequest } from '../../../modules/auth';
import useSigninStyles from './SigninFormMuiStyles';

const Signin = () => {
  const classes = useSigninStyles();
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors, formState } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = (values) => dispatch(logInRequest(values));

  const renderServerErrorMessage = (msg = '') => (
    <Typography color="error" align="center">
      {msg}
    </Typography>
  );

  return (
    <Paper className={classes.card} elevation={3} data-testid="login-form">
      {error && renderServerErrorMessage(error)}

      <Box fontSize={36} fontWeight={700} component="h2" mb={2}>
        Войти в личный кабинет
      </Box>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Box component={FormGroup} mb={2}>
          <TextField
            error={!!errors.username}
            name="username"
            id="username"
            label="Имя пользователя*"
            helperText={!!errors.username && 'Введите имя'}
            fullWidth
            inputRef={register({
              required: true,
            })}
          />
        </Box>

        <Box component={FormGroup}>
          <TextField
            name="password"
            error={!!errors.password}
            id="password"
            label="Пароль*"
            type="password"
            helperText={!!errors.password && 'Введите пароль'}
            fullWidth
            inputRef={register({
              required: true,
            })}
          />
        </Box>

        <Box
          component={Grid}
          mt={5}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            data-testid="button"
            disabled={isSubmitting}
            className={classes.btn}
          >
            Войти
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Signin;
