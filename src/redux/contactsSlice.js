import { createSlice } from '@reduxjs/toolkit';
// import { contactsInitialState } from './store';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { contactsInitialState } from './contactsInitState';
import { STATUS } from 'constants/statusConstants';
import { contactsAsyncThunk } from 'redux/contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    // contactsLoadingAction: state => {
    //   state.status = STATUS.loading;
    // },
    // contactsSuccessAction: (state, { payload }) => {
    //   state.status = STATUS.success;
    //   state.contacts = payload;
    // },
    // contactsErrorAction: state => {
    //   state.status = STATUS.error;
    // },
  },
  extraReducers: {
    [contactsAsyncThunk.pending]: state => {
      state.status = STATUS.loading;
    },
    [contactsAsyncThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.success;
      state.contacts = payload;
    },
    [contactsAsyncThunk.rejected]: state => {
      state.status = STATUS.error;
    },
  },
});

// export const {
//   contactsLoadingAction,
//   contactsErrorAction,
//   contactsSuccessAction,
// } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// const contactsInitialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       return {
//         contacts: state.contacts.filter(({ id }) => id !== action.payload),
//       };
//     },
//   },
// });

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } = contactsSlice.actions;
