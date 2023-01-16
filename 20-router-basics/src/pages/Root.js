import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNaviagtion from '../components/MainNaviagtion';

const RootLayout = () => {
  return (
    <>
      <MainNaviagtion />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
