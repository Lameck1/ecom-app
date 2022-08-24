import React, { useState } from 'react';
import styles from './auth.module.scss';
import logo from '../../assets/logo_0.png';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setIsLoading(false);
        navigate('/login');
        toast.success(`Successfully registered!`);
      })
      .catch((error) => {
        toast.error(error.code.split('/')[1].split('-').join(' '));
        setIsLoading(false);
      });
  };

  return (
    <section>
      {isLoading && <Loader />}

      <img src={logo} alt='logo' className={styles.logo} />
      <p>Create you ECOM account!</p>
      <p>To keep your account safe, we need a strong password.</p>
      <h1>Sign up</h1>

      <form onSubmit={registerUser}>
        <div className={styles['form-group']}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            type='email'
            className={styles['form-control']}
            id='email'
            placeholder='Enter email'
            name='email'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChange}
            type='password'
            className={styles['form-control']}
            id='password'
            placeholder='Enter password'
            name='password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor='password'>Confirm Password</label>
          <input
            onChange={handleChange}
            type='password'
            className={styles['form-control']}
            id='confirm-password'
            placeholder='Confirm password'
            name='confirmPassword'
            required
          />
        </div>

        <button type='submit'>Sign up</button>
      </form>
      <div className={styles.quiz}>
        <p>
          Have an account? <Link to='/login'>Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
