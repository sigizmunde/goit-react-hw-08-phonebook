import { createSlice } from '@reduxjs/toolkit';
import { addContact, loadContacts, removeContact } from './contactsThunk';

// const initialItems = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', loading: false },
  reducers: {
    // contactAdd(state, action) {
    //   state.items.push(action.payload);
    // },
    // contactRemove(state, action) {
    //   state.items = state.items.filter(c => c.id !== action.payload.id);
    // },
    filterSet(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [loadContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.loading = false;
    },
    [addContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.loading = false;
    },
    [removeContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.loading = false;
    },
    [loadContacts.pending](state, _) {
      state.loading = true;
    },
  },
});

export const { filterSet } = contactsSlice.actions;
