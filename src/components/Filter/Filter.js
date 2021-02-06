import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, phonebookActions } from 'redux/phonebook';

function ContactFilter() {

  const filter = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();
  
  return (
    <>
      <h3 className={styles.filterTitle}>Find contact by name</h3>
      <input
        className={styles.filterInput}
        type="text"
        value={filter}
        name="filter"
        onChange={event =>
          dispatch(phonebookActions.onChangeFilter(event.target.value))
        }
        autoFocus
      />
    </>
  );
}

export default ContactFilter;
