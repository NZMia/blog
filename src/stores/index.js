import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import categorySlice from './categorySlice';
import articlesSlice from './articlesSlice';
import authSlice from './authSlice';

export default configureStore({
  reducer: {
    category: categorySlice,
    articles: articlesSlice,
    loading: loadingSlice,
    auth: authSlice,
  },
});
