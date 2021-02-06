import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookApi from 'api/phonebookApi';


export const addContact = createAsyncThunk(
  'phoneBook/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const responseContact = await phonebookApi.addContact(contact);
      return responseContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phoneBook/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      await phonebookApi.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchContacts = createAsyncThunk(
  'phoneBook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookApi.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
