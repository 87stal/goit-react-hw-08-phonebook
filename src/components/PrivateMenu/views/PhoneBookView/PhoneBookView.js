import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { phoneBookSelectors, phoneBookOperations } from 'redux/phoneBook';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';

import 'react-toastify/dist/ReactToastify.css';
import styles from './PhoneBookView.module.css';

function PhoneBook() {
  const contacts = useSelector(phoneBookSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phoneBookOperations.getContacts());
  }, []); // eslint-disable-line

  return (
    <Container>
      <h1 className={styles.title}>Phone book</h1>
      <ContactForm />

      {contacts?.length > 0 && (
        <>
          <h2 className={styles['sub-title']}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

export default PhoneBook;
