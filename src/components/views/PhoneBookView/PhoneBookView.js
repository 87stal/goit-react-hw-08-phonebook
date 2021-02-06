import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';


import { phonebookSelectors, phonebookOperations } from 'redux/phonebook';

import Notification from 'components/Notification/Notification'
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container'

import 'react-toastify/dist/ReactToastify.css';
import styles from './PhoneBookView.module.css';

function PhoneBook() {
  const contacts = useSelector(phonebookSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, []); // eslint-disable-line

  return (
    <>
   <Container>
      <h1 className={styles.title}>Phone book</h1>
      <ContactForm />

      {contacts?.length > 0 ? (
        <>
          <h2 className={styles['sub-title']}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      ):(
        <Notification message="No number in the phone book" />
      )}
      <ToastContainer autoClose={2000} />
      </Container>
    </>
  );
}

export default PhoneBook;
