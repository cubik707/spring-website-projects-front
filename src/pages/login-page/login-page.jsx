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
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset field-specific errors
    setGeneralError(null); // Reset general error

    try {
      await dispatch(login({ username, password })).unwrap();
      setGeneralError(null);
      navigate('/');
    } catch (backendErrors) {
      setErrors(backendErrors.errors || {}); // If it's field-specific errors
      setGeneralError(backendErrors.message || null); // If it's a general error
    }
  };


  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.inputWrapper}>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className={styles.errorMessage}>{errors.username}</div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className={styles.errorMessage}>{errors.password}</div>
            )}
          </div>

          <Button type="submit">Login</Button>
        </form>

        <Link to="/signup" className={styles.linkToSignup}>
          Don't have an account? Sign up
        </Link>
      </div>

      {generalError && (
        <div className='errorMessage'>{generalError}</div>
      )}
    </div>
  );
};


export default LoginPage;
