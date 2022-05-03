import React from 'react';
import { AppProviders } from './AppProviders';
import { Provider } from 'react-redux';
import store from './stores/index';
import AuthenticatedApp from './layout/AuthenticatedApp';

export const App = () => {
  return (
    <Provider store={store}>
      <AuthenticatedApp />
      {/* <AppProviders 
        children={<AdminLayout />} 
        user={}/> */}
    </Provider>
  );
};

export default App;
