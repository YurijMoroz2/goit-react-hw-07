import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts,addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => builder
    .addCase(fetchContacts.pending, (state) => {
      state.contacts.loading = true;
      state.contacts.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, actions) => {
      state.contacts.loading = false;
      state.contacts.items = actions.payload;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.contacts.loading = false;
      state.contacts.error = 'Error fetching contacts';
    })
    .addCase(addContact.pending, (state) => {
      state.contacts.loading = true;
      state.contacts.error = null;
    })
    .addCase(addContact.fulfilled, (state, actions) => {
      state.contacts.loading = false;
      state.contacts.items.push(actions.payload);
    })
    .addCase(addContact.rejected, (state) => {
      state.contacts.loading = false;
      state.contacts.error = 'Error adding contact';
    })
    .addCase(deleteContact.pending,()=>{})
    .addCase(deleteContact.fulfilled,(state,action)=>{
      state.contacts.items =state.contacts.items.filter(item=>item.id!==action.payload.id);
      

    })
    .addCase(deleteContact.rejected,()=>{})

});

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.items.push(action.payload);
  //     },
  //     prepare({ name, number }) {
  //       let formattedNumber = number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
  //       return {
  //         payload: {
  //           name,
  //           number: formattedNumber,
  //           id: nanoid(5),
  //         },
  //       };
  //     },
  //   },
  //   deleteContact: (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
  //   },
  // },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = { key: 'contacts', storage, whitelist: ['contacts'] };

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
