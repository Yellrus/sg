import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-wrap">
    Страница не найдена. Вернуться на
    <Link component={RouterLink} to="/">
      &nbsp;<b>главную</b>
    </Link>
    ?
  </div>
);

export default PageNotFound;
