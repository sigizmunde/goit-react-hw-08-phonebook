import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logInUser,
  logOutUser,
  registerUser,
} from './authThunk';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
    },
  },
});
