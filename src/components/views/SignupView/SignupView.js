import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { toast } from 'react-toastify';
import styles from './SignupView.module.css';
import Container from 'components/Container/Container'

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
        return; 
    }
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <Container>
      <h3>Signup an account</h3>
      <form className={styles.formSubmit} onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.formSubmitInput}
          name="name"
          value={name}
          onChange={onChange}
          type="text"
          id="name"
          placeholder="Enter name"
        />

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
          placeholder="Enter your password at least 7 characters "
        />

        <button className={styles.formSubmitButton} type="submit">
          Signup
        </button>
      </form>
      </Container>
    </>
  );
}

export default SignupView;
