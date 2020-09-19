import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUserListRequest } from '../../../modules/users';

const useUserListFetch = ({ page, count }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserListRequest({ page, count }));
  }, [dispatch, page, count]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useUserListFetch;
