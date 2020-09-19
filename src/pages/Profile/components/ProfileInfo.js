import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ProfileInfo = memo(({ profile: { name, picture, location } }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {name && <CardHeader title={name.first} subheader={name.last} />}
      {picture && <CardMedia className={classes.media} image={picture.large} />}
      <CardContent>
        <Typography component="p">City: {location && location.city}</Typography>
      </CardContent>
    </Card>
  );
});

ProfileInfo.propTypes = {
  profile: PropTypes.object,
};

ProfileInfo.defaultProps = {
  profile: {},
};

export default ProfileInfo;
