import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../common';

export const fetchAllArticles = createAsyncThunk(
  'article/fetchAll',
  async () => {
    try {
      const res = await api.get(`/articles`);
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  }
);
export const articlesSlice = createSlice({
  name: 'articles',

  initialState: {
    articlesItem: [],
  },

  extraReducers: {
    [fetchAllArticles.fulfilled]: (state, { payload }) => {
      state.articlesItem = payload;
    },
  },
});

export default articlesSlice.reducer;
