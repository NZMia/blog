import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from '../auth/authProvider';
export const register = createAsyncThunk(
  'auth/register',
  async ({ username, password }) => {
    try {
      const res = await authService.register({ username, password });
      return res.data;
    } catch (err) {
      throw Error(err.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isLoggedIn: false,
    user: {},
  },

  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
