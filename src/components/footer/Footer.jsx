import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer>
      <img src={logo} alt='Ecom logo' className={styles.logo} />
      <p> &copy; {new Date().getFullYear()} - All Rights Reserved </p>
    </footer>
  );
}

export default Footer;
