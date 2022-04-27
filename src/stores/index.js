import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './loadingSlice';
import categorySlice from './categorySlice';
import articlesSlice from './articlesSlice';

export default configureStore({
  reducer: {
    category: categorySlice,
    articles: articlesSlice,
    loading: loadingSlice,
  },
});
