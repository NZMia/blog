import React from 'react';

import { Provider } from 'react-redux';
import store from './stores/index';

import MainLayout from './layout/MainLayout';
import AdminLayout from './layout/AdminLayout';
export const App = () => {
  return (
    <Provider store={store}>
      {/* <MainLayout /> */}
      <AdminLayout />
    </Provider>
  );
};

export default App;
