import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';

export const AuthenticatedApp = () => {
  return (
    <div className="adminLayout">
      <Header />
      <Login />
    </div>
  );
};

export default AuthenticatedApp;
