import React from 'react';

import { Provider } from 'react-redux';
import store from './stores/index';

import MainLayout from './layout/MainLayout';

export const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default App;
