import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const UserListItem = memo(({ users }) =>
  users.map(({ login, name, picture, location }) => (
    <ListItem key={login.uuid} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={`${name.first} ${name.last}`} src={picture.thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={`${name.first} ${name.last}`}
        secondary={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            <Typography component="span" color="textPrimary">
              {location.county}
            </Typography>
            {location.city}
          </>
        }
      />
    </ListItem>
  )),
);

UserListItem.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserListItem;
