import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './phonebook-action';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './phonebook-operations';

const contactsReducer = createReducer([], {
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [actions.onChangeFilter]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
