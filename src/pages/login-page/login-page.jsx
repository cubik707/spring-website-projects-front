import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/core/input/input';
import styles from './login-page.module.css'
import Button from "../../components/core/Button/Button";
import { useDispatch } from "react-redux";
import { login } from "../../state/auth-reducer";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      dispatch(login());
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.loginForm}>
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
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
