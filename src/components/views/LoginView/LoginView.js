import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import styles from './LoginView.module.css';
import Container from 'components/Container/Container';

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return toast.error('Enter contact name');
    }

    dispatch(authOperations.login({ email: normalizedEmail, password }));
    reset();
  };

  const onChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        reset();
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Container>
    <h3>Sign in to your account</h3>
      <form className={styles.formSubmit} onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className={styles.formSubmitInput}
          name="email"
          value={email}
          onChange={onChange}
          type="email"
          id="email"
          placeholder="Enter email"
        />

        <label htmlFor="password">Password</label>
        <input
          className={styles.formSubmitInput}
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          id="password"
          placeholder="Enter password"
        />

        <button className={styles.formSubmitButton} type="submit">
          Login
        </button>
      </form>
      </Container>
    </>
  );
}

export default LoginView;
