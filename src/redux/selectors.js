import { createSelector } from '@reduxjs/toolkit';

export const selectStateContacts = state => state.contactsReducer.contacts;

export const selectItems = state => state.contactsReducer.contacts.items;

export const filterQweryInput = state => state.filtersReducer.filters.name;

export const selectFilter = createSelector(
  [selectItems, filterQweryInput],
  (arrayItems, filter) => {
    if (filter !== '') {
      return arrayItems.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
    } else {
      return arrayItems;
    }
  }
);
