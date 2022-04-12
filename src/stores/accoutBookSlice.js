import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../common';

export const fetchAllItemFormAccountBook = createAsyncThunk(
  'accountBook/fetchAll',
  async () => {
    try {
      const res = await api.get(`/accountBook`);
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  }
);
export const accountBookSlice = createSlice({
  name: 'accountBook',

  initialState: {
    accountBookItems: [],
  },

  reducers: {
    getAccountBook: (state, payload) => {},
  },

  extraReducers: {
    [fetchAllItemFormAccountBook.fulfilled]: (state, { payload }) => {
      state.accountBookItems = payload;
    },
  },
});

export const { getAccountBook } = accountBookSlice.actions;
export default accountBookSlice.reducer;
