import React, { useState } from 'react';
import styles from './signup-page.module.css';
import Input from '../../components/core/input/input';
import Button from '../../components/core/button/button';
import { signup } from '../../state/auth/auth-thunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    age: '',
  });
  const [errors, setErrors] = useState({});
  const [generalErrors, setGeneralErrors] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Reset errors before the new validation
    setErrors({});
    setGeneralErrors(null);

    try {
      await dispatch(signup(formData)).unwrap();
      navigate('/');
    } catch (err) {
      const backendErrors = handleError(err); // Process errors from the backend
      setErrors(backendErrors.errors || {}); // If it's an object of errors, set them
      setGeneralErrors(backendErrors.message || null); // If it's a general generalErrors message, show it
    }
  };

  const handleError = (e) => {
    const backendErrors = e;

    if (backendErrors.errors) {
      // If it's an object with field-specific errors
      return { errors: backendErrors.errors };
    }

    // If there's a general generalErrors message
    return {
      message: backendErrors.message || 'An unexpected generalErrors occurred',
    };
  };

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupCard}>
        <h2 className={styles.title}>Sign up</h2>
        <form className={styles.signupForm} onSubmit={handleSignup}>
          <div className={styles.inputWrapper}>
            <Input
              placeholder='Username'
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className={styles.errorMessage}>{errors.username}</div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <Input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className={styles.errorMessage}>{errors.password}</div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <Input
              type='password'
              placeholder='Repeat password'
              name='repeatPassword'
              value={formData.repeatPassword}
              onChange={handleChange}
            />
            {errors.repeatPassword && (
              <div className={styles.errorMessage}>{errors.repeatPassword}</div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <Input
              placeholder='First name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className={styles.errorMessage}>{errors.firstName}</div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <Input
              placeholder='Last name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className={styles.errorMessage}>{errors.lastName}</div>
            )}
          </div>

          <div className={styles.inputWrapper}>
            <Input
              type='number'
              placeholder='Age'
              name='age'
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && (
              <div className={styles.errorMessage}>{errors.age}</div>
            )}
          </div>
          <Button type='submit'>Sign up</Button>
        </form>
      </div>
      {generalErrors && (
        <div className={styles.errorMessage}>{generalErrors}</div>
      )}
    </div>
  );
};

export default SignupPage;
