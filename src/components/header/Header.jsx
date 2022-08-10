import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import Account from './Account';
import Help from './Help';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <div className={styles.humburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to='/' className={styles['logo-anchor']}>
          <img src={logo} alt='Ecom logo' className={styles.logo} />
        </Link>
      </div>
      <form
      // onSubmit={this.handleSubmit}
      >
        <div className={styles.search}>
          <BiSearchAlt2
            style={{ color: '#333', fontSize: '1.3rem', padding: '0 0.5rem' }}
          />
          <input
            type='text'
            // value={value}
            // onChange={handleChange}
            placeholder='Search products'
          />
        </div>

        <input type='submit' value='search' />
      </form>

      <nav className={styles.nav}>
        <Account />
        <Help />
        <div className={styles.cart}>
          <Link to='/cart' className={styles['cart-link']}>
            <span>Cart</span> <FaShoppingCart />
            <span className={styles['cart-count']}>0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
