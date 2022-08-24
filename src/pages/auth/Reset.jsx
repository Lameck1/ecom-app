import React, { useState } from 'react';
import styles from './auth.module.scss';
import logo from '../../assets/logo_0.png';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';
import { sendPasswordResetEmail } from 'firebase/auth';

function Reset() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        navigate('/login');
        toast.success(`Successfully sent reset password email!`);
      })
      .catch((error) => {
        toast.error(error.code.split('/')[1].split('-').join(' '));
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      {isLoading && <Loader />}
      <img src={logo} alt='logo' className={styles.logo} />
      <p>Recover your ECOM account!</p>
      <p>Please provide the correct email you used to create your account.</p>
      <h1>Reset password</h1>
      <form onSubmit={handleResetPassword}>
        <div className={styles['form-group']}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
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
