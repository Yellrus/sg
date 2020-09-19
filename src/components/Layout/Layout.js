import React from 'react';
import Header from '../Header';
import RootRouter from '../../pages/Router';

const Layout = () => (
  <>
    <Header />
    <main>
      <RootRouter />
    </main>
  </>
);
export default Layout;
