import React from 'react';
import styles from './auth.module.scss';
import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/logo_0.png';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <section>
      <img src={logo} alt='logo' className={styles.logo} />
      <p>Welcome back!!</p>
      <h1>Login</h1>
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
            required
          />
        </div>

        <button type='submit'>Login</button>
      </form>
      <div className={styles.quiz}>
        <p>
          Don't have an account? <Link to='/register'>Sign up</Link>
        </p>
        <p>
          Forgot your password? <Link to='/reset'>Reset</Link>
        </p>
      </div>
      <button className={styles.google}>
        <FcGoogle size={24} />
        <span>Login with Google</span>
      </button>
    </section>
  );
}
export default Login;
