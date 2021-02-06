import axios from 'axios';
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const authToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// AUTH
export const signup = contact => {
  return axios.post('/users/signup', contact).then(({ data }) => data);
};

// AUTH
export const login = contact => {
  return axios.post('/users/login', contact).then(({ data }) => data);
};

// AUTH
export const logout = () => {
  return axios.post('/users/logout').then(({ data }) => data);
};

// AUTH
export const getUser = () => {
  return axios.get('/users/current').then(({ data }) => data);
};

// PHONE BOOK
export const getContacts = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

// PHONE BOOK
export const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

// PHONE BOOK
export const deleteContact = id => {
  return axios.delete(`/contacts/${id}`).then(({ data }) => data);
};
