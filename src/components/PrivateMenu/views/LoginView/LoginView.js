import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import Container from '../../components/Container/Container';
import styles from './LoginView.module.css';

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
        toast.error(`There are no type input "${name}"`);
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h3>Email</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          name="email"
          value={email}
          onChange={onChange}
          type="email"
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          className={styles.input}
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          id="password"
        />

        <button className={styles['remove-btn']} type="submit">
          Login
        </button>
      </form>
    </Container>
  );
}

export default LoginView;
