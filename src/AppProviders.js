import React from 'react';
import { AuthProvider } from './auth/authProvider';

export const AppProviders = (children) => {
  return <AuthProvider children={children} />;
};
