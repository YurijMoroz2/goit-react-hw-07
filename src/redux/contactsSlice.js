import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.contacts.loading = false;
        state.contacts.items = actions.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = 'Error fetching contacts';
      })
      .addCase(addContact.pending, state => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, actions) => {
        state.contacts.loading = false;
        state.contacts.items.push(actions.payload);
      })
      .addCase(addContact.rejected, state => {
        state.contacts.loading = false;
        state.contacts.error = 'Error adding contact';
      })
      .addCase(deleteContact.pending, () => {})
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, () => {}),
});

export const contactsReducer = contactsSlice.reducer;
