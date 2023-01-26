// import { contactsSlice } from './contactsSlice';
// import { persistStore } from 'redux-persist';

// import {
//   persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReducer,
  },
  devTools: true,
  middleware: defaultMiddleware => defaultMiddleware(),
});

// import { persistedContactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// console.log(filterReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
