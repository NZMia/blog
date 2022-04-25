import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import categorySlice from './categorySlice';

export default configureStore({
  reducer: {
    category: categorySlice,
    loading: loadingSlice,
  },
});
