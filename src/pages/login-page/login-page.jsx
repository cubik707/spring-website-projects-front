import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/core/input/input';
import styles from './login-page.module.css';
import Button from '../../components/core/button/button';
import { useDispatch } from 'react-redux';
import { login } from '../../state/auth/auth-thunk';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ username, password })).unwrap();
      setError(null);
      navigate('/');
    } catch (error) {
      setError(error.message || 'Failed to login');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <Input
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit'>Login</Button>
        </form>
        <Link to='/signup' className={styles.linkToSignup}>
          Don't have an account? Sign up
        </Link>
      </div>
      {error && <div className='errorMessage'>{error}</div>}
    </div>
  );
};

export default LoginPage;
