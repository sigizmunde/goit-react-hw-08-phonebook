// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const initialItems = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: initialItems, filter: '' },
//   reducers: {
//     contactAdd(state, action) {
//       state.items.push(action.payload);
//     },
//     contactRemove(state, action) {
//       state.items = state.items.filter(c => c.id !== action.payload.id);
//     },
//     filterSet(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { contactAdd, contactRemove, filterSet } = contactsSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// // Selectors
// export const getContacts = store => store.contacts.items;
// export const getFilter = store => store.contacts.filter;
