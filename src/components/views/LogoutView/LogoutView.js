import React from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './LogoutView.module.css';
import Container from 'components/Container/Container'

function LogoutView() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authOperations.logout());
  };

  return (
    <>
    <Container>
      <h3>Are you sure want to logout?</h3>
      <button className={styles.formSubmitButton} type="button" onClick={onLogout}>
        Logout
      </button>
      </Container>
    </>
  );
}

export default LogoutView;
