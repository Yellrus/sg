import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProfileRequest } from '../../../modules/profile';

export const useProfileFetch = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfileRequest());
  }, [dispatch]);

  return {
    data,
    isLoading,
    error,
  };
};
