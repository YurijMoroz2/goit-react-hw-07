import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare({ name, number }) {
        let formattedNumber = number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
        return {
          payload: {
            name,
            number: formattedNumber,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = { key: 'contacts', storage, whitelist: ['contacts'] };

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
