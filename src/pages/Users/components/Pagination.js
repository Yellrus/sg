import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  btn: {
    marginRight: '10px',
  },
}));

const Pagination = memo(({ page, nextPage, prevPage }) => {
  const classes = useStyles();
  return (
    <Box
      component={Grid}
      mt={5}
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Button
        variant="contained"
        color="primary"
        type="button"
        className={classes.btn}
        disabled={page <= 1}
        onClick={prevPage}
      >
        Назад
      </Button>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={nextPage}
      >
        Вперёд
      </Button>
    </Box>
  );
});

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

export default Pagination;
