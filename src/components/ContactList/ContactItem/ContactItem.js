import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { phonebookOperations } from 'redux/phonebook/';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <span className={styles.contactName}>
        {name}: {number}
      </span>
      <button
        className={styles.contactDeleteButton}
        onClick={() => dispatch(phonebookOperations.deleteContact(id))}
      >
        Удалить
      </button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
