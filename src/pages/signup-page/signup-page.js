import React from 'react';
import styles from './signup-page.module.css';
import Input from '../../components/core/input/input';
import Button from '../../components/core/button/button';

const SignupPage = () => {
  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupCard}>
        <h2 className={styles.title}>Sign up</h2>
        <form className={styles.signupForm}>
          <Input placeholder='Username' />
          <Input type='password' placeholder='Password' />
          <Input type='password' placeholder='Repeat password' />
          <Input placeholder='First name' />
          <Input placeholder='Last name' />
          <Input type='number' placeholder='Age' />
          <Button type='submit'>Sign up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
