import { configureStore } from '@reduxjs/toolkit';
import accountBookSlice from './accoutBookSlice';

export default configureStore({
  reducer: {
    accoutBook: accountBookSlice,
  },
});
