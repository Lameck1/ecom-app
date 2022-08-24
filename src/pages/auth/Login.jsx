import React, { useState } from 'react';
import styles from './auth.module.scss';
import { FcGoogle } from 'react-icons/fc';
import logo from '../../assets/logo_0.png';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';

function Login() {
  const provider = new GoogleAuthProvider();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setIsLoading(false);
        navigate('/');
        toast.success(`Successfully logged in!`);
      })
      .catch((error) => {
        toast.error(error.code.split('/')[1].split('-').join(' '));
        setIsLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        setIsLoading(false);
        navigate('/');
        toast.success(`Successfully logged in!`);
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
      <p>Welcome back!!</p>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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
      <button className={styles.google} onClick={handleGoogleSignIn}>
        <FcGoogle size={24} />
        <span>Login with Google</span>
      </button>
    </section>
  );
}
export default Login;
