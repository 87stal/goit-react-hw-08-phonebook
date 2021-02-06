import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import Container from '../../components/Container/Container';
import styles from './SignupView.module.css';

function SignupView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const normalizedName = name.trim();

    if (!normalizedName) {
      return toast.error('Enter contact name');
    }

    dispatch(authOperations.signup({ name: normalizedName, email, password }));
    reset();
  };

  const onChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h3>Signup</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          name="name"
          value={name}
          onChange={onChange}
          type="text"
          id="name"
        />

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
          Signup
        </button>
      </form>
    </Container>
  );
}

export default SignupView;
