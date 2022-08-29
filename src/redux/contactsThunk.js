import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadContacts = createAsyncThunk('contacts/load', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (err) {
    //   if (err.status === 401) console.log('user is not authorized');
    console.log(err);
  }
});

export const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async contactId => {
    try {
      const response = await axios.delete('/contacts/' + contactId);
      console.log('Contact deleted with response ', response);
      return contactId;
    } catch (err) {
      console.log(err);
    }
  }
);
