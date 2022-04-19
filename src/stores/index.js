import { configureStore } from '@reduxjs/toolkit';
import accountBookSlice from './accoutBookSlice';
import loadingSlice from './loadingSlice';

export default configureStore({
  reducer: {
    accoutBook: accountBookSlice,
    loading: loadingSlice,
  },
});
