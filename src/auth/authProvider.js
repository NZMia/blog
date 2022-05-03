import React, { useState, createContext, useContext } from 'react';
import * as auth from './authService';

const AuthContext = createContext(null);

export const AuthProvider = ({}) => {
  const [auth, setAuth] = useState();

  // const register = () => auth.register().then(setUser)
  // const login = (user) => auth.login({username:"nzmiazhang@gmail.com", password: "1234"}).then(setUser);
  // const logout = () => auth.logout().then(setUser);

  return <AuthContext.Provider value={{ auth, setAuth }} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
