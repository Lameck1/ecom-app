import React from 'react';
import styles from './auth.module.scss';
import logo from '../../assets/logo_0.png';
import { Link } from 'react-router-dom';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <section>
      <img src={logo} alt='logo' className={styles.logo} />
      <p>Create you ECOM account!</p>
      <p>To keep your account safe, we need a strong password.</p>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className={styles['form-control']}
            id='email'
            placeholder='Enter email'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className={styles['form-control']}
            id='password'
            placeholder='Enter password'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor='password'>Confirm Password</label>
          <input
            type='password'
            className={styles['form-control']}
            id='password'
            placeholder='Confirm password'
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
