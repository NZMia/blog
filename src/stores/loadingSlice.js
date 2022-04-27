import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCategory } from './categorySlice';

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
    [fetchAllCategory.pending]: isLoadingReducer,
    [fetchAllCategory.fulfilled]: noneLoadingReducer,
    [fetchAllCategory.rejected]: noneLoadingReducer,
  },
});

export default loadingSlice.reducer;
