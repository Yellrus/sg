import { makeStyles } from '@material-ui/core';

const useSigninStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '3px',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(7),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
    width: '161px',
    fontSize: '21px',
  },
}));

export default useSigninStyles;
