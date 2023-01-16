import React from 'react';
import MainNaviagtion from '../components/MainNaviagtion';

const ErrorPage = () => {
  return (
    <>
      <MainNaviagtion />
      <main>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
