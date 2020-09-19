import React from 'react';

const usePagintaion = () => {
  const [page, setPage] = React.useState(1);
  const [count] = React.useState(6);

  const nextPage = () => setPage((prevPage) => prevPage + 1);

  const prevPage = () => {
    setPage((prevPage) => {
      if (prevPage <= 1) return prevPage;
      return prevPage - 1;
    });
  };

  return {
    count,
    page,
    nextPage,
    prevPage,
  };
};

export default usePagintaion;
