import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selector';

function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={styles.contactListItem} key={id}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
