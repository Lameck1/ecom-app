import React from 'react';
import styles from './auth.module.scss';
import logo from '../../assets/logo_0.png';
import { Link } from 'react-router-dom';

function Reset() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <section>
      <img src={logo} alt='logo' className={styles.logo} />
      <p>Recover your ECOM account!</p>
      <p>Please provide the correct email you used to create your account.</p>
      <h1>Reset password</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className={styles['form-control']}
            id='email'
            placeholder='Enter registered email'
          />
        </div>

        <button type='submit'>Reset password</button>
      </form>
      <div className={styles.quiz}>
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Sign up</Link>
        </div>
      </div>
    </section>
  );
}

export default Reset;
