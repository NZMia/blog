import { createSlice } from '@reduxjs/toolkit';
import { fetchAllItemFormAccountBook } from './accoutBookSlice';

const isLoadingReducer = (state) => {
  state.loadingState = true;
};
const noneLoadingReducer = (state) => {
  state.loadingState = false;
};

export const loadingSlice = createSlice({
  name: 'loading',

  initialState: {
    loadingState: false,
  },

  extraReducers: {
    [fetchAllItemFormAccountBook.pending]: isLoadingReducer,
    [fetchAllItemFormAccountBook.fulfilled]: noneLoadingReducer,
    [fetchAllItemFormAccountBook.rejected]: noneLoadingReducer,
  },
});

export default loadingSlice.reducer;
