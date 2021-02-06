// import { createSelector } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const getContacts = state => state.phoneBook.contacts;

export const getFilter = state => state.phoneBook.filter;


// MEMORIZED
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
