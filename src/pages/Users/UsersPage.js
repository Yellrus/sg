import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { usePagination, useUserListFetch } from './hooks/index';
import UserItems from './components/UserItems';
import Pagination from './components/Pagination';

const UsersPage = () => {
  const { count, page, nextPage, prevPage } = usePagination();
  const { isLoading, data, error } = useUserListFetch({ page, count });
  const errorMsgJsx = error && (
    <Typography component="p" color="error">
      {error}
    </Typography>
  );
  const loaderJsx = isLoading && <CircularProgress />;

  const listUserJsx = isLoading || <UserItems users={data} />;

  return (
    <>
      <div className="page-wrap">
        <h1>Список пользователей</h1>
        {errorMsgJsx}
        {loaderJsx}
        {listUserJsx}
        <Pagination prevPage={prevPage} nextPage={nextPage} page={page} />
      </div>
    </>
  );
};

export default UsersPage;
