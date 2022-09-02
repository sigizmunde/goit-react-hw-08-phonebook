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
  isFetching: false,
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: state => {
      state.errorMessage = '';
    },
  },
  extraReducers: {
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [logOutUser.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [logInUser.pending](state, _) {
      state.isFetching = true;
    },
    [registerUser.pending](state, _) {
      state.isFetching = true;
    },
    [logOutUser.pending](state, _) {
      state.isFetching = true;
    },
    [fetchCurrentUser.pending](state, _) {
      state.isFetching = true;
    },
    [logInUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [registerUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [logOutUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
  },
});

export const { resetError } = authSlice.actions;
