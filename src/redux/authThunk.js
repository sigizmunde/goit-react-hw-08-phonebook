import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios initializes in the index.js

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return { user: data.user, token: data.token };
    } catch (err) {
      console.log(err);
      switch (err.response.status) {
        case 400:
          return thunkAPI.rejectWithValue('Incorrect name or password');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unset();
      return data;
    } catch (err) {
      console.log(err);
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue('No token in header');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with connection');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return { user: data.user, token: data.token };
    } catch (err) {
      console.log(err);
      switch (err.response.status) {
        case 400:
          return thunkAPI.rejectWithValue('This email is already in use');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with connection');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token; // getState() returns all the redux state

    if (persistedToken === null) return thunkAPI.rejectWithValue(); // needs to reject not to get fulfilled action

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      console.log(err);
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue('You have no token');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with connection');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);
