import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import Account from './Account';
import Help from './Help';
import MobileNav from './MobileNav';
import PropTypes from 'prop-types';

const search = (value, handleChange) => (
  <div className={styles.search}>
    <BiSearchAlt2
      style={{ color: '#333', fontSize: '1.3rem', padding: '0 0.5rem' }}
    />
    <input
      type='text'
      value={value}
      onChange={handleChange}
      placeholder='Search products'
    />
  </div>
);

const cart = (
  <div className={styles.cart}>
    <Link to='/cart' className={styles['cart-link']}>
      <span>Cart</span> <FaShoppingCart size={24} />
      <span className={styles['cart-count']}>0</span>
    </Link>
  </div>
);

function Header({ username }) {
  const [isMobileMenu, setMobileMenu] = useState(() => false);
  const toggleMobileMenu = () => setMobileMenu(!isMobileMenu);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('search');
  };

  return (
    <header className={styles.header}>
      <>
        <MobileNav isMobileMenu={isMobileMenu} setMobileMenu={setMobileMenu} />
        <div className={styles['top-header']}>
          <div className={styles['logo-container']}>
            <div
              className={`${styles['humburger']} ${
                isMobileMenu ? styles['is-active'] : ''
              }`}
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link to='/' className={styles['logo-anchor']}>
              <img src={logo} alt='Ecom logo' className={styles.logo} />
            </Link>
          </div>
          <div className={styles['top-header-icons']}>
            <Link to='/' className={styles['menu-item']}>
              <FaUserAlt />
            </Link>
            {cart}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {search()}
          <input type='submit' value='search' />
        </form>
        <nav className={styles.nav}>
          <Account username={username} />
          <Help />
          {cart}
        </nav>
      </>
      {search()}
    </header>
  );
}

Header.propTypes = {
  username: PropTypes.string,
};

Header.defaultProps = {
  username: '',
};

export default Header;
