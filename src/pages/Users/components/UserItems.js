import React, { memo } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import UserListItem from './UserListItem';

const UserItems = memo(({ users }) => (
  <List>
    <UserListItem users={users} />
  </List>
));

UserItems.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserItems;
