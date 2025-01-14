import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/core/input/input';
import styles from './login-page.module.css';
import Button from '../../components/core/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/auth/auth-thunk';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ username, password })).unwrap();
      setError(null);
    } catch (error) {
      setError(error.message || 'Failed to login');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect to home if the user is authenticated
    }
  }, [isAuthenticated, navigate]);

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
      </div>
      {error && <div className='errorMessage'>{error}</div>}
    </div>
  );
};

export default LoginPage;
