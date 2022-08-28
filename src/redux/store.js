import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsAPI';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
