import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useProfileFetch } from './hook/useProfileData';
import { ProfileInfo } from './components';

const ProfilePage = () => {
  const { data, isLoading, error } = useProfileFetch();
  const errorMsgJsx = error && (
    <Typography component="p" color="error">
      {error}
    </Typography>
  );
  const loaderJsx = isLoading && <CircularProgress />;

  const listUsersJsx = isLoading || <ProfileInfo profile={data} />;

  return (
    <div className="page-wrap" data-testid="profile-page">
      {errorMsgJsx}
      {loaderJsx}
      {listUsersJsx}
    </div>
  );
};

export default ProfilePage;
