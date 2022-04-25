import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../common';

export const fetchAllCategory = createAsyncThunk(
  'category/fetchAll',
  async () => {
    try {
      const res = await api.get(`/category`);
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  }
);
export const categorySlice = createSlice({
  name: 'category',

  initialState: {
    categoryItems: [],
  },

  //   reducers: {
  //     getCatetory: (state, payload) => {},
  //   },

  extraReducers: {
    [fetchAllCategory.fulfilled]: (state, { payload }) => {
      state.categoryItems = payload;
    },
  },
});

// export const { getCatetory } = categorySlice.actions;
export default categorySlice.reducer;
