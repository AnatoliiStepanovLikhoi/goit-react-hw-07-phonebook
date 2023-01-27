// import {
//   contactsErrorAction,
//   contactsLoadingAction,
//   contactsSuccessAction,
// } from 'redux/contactsSlice';

import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63d28d3606556a0fdd3f25f8.mockapi.io';

export const contactsAsyncThunk = createAsyncThunk(
  'contacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactAsyncThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactAsyncThunk = createAsyncThunk(
  'tasks/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { contact });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const contactsAsyncThunk = async dispatch => {
//   dispatch(contactsLoadingAction());

//   try {
//     const { data } = await axios.get(
//       'https://63d28d3606556a0fdd3f25f8.mockapi.io/contacts'
//     );
//     dispatch(contactsSuccessAction(data));
//   } catch {
//     dispatch(contactsErrorAction());
//   }
// };
