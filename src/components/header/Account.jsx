import React, { useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useOnClickOutside from '../../customHooks/useOnClickOutside';

function Account({ isMobile, setMobileMenu }) {
  const [isOpen, setIsOpen] = React.useState(() => false);

  const accountMenu = useRef(null);
  useOnClickOutside(accountMenu, () => setIsOpen(false));

  const toggleMenu = () => isMobile && setMobileMenu(() => false);

  return (
    <div
      ref={accountMenu}
      className={`${styles.menu} ${isMobile && ' menu'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <FaUserAlt />
      <span>Acount</span>
      {!isMobile ? isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> : null}
      <div
        className={isOpen ? styles['menu-items'] : styles['menu-items-hidden']}
      >
        <Link to='/login' className={styles['menu-item']} onClick={toggleMenu}>
          Login
        </Link>
        <Link
          to='/register'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Register
        </Link>
        <Link to='/orders' className={styles['menu-item']} onClick={toggleMenu}>
          Orders
        </Link>
      </div>
    </div>
  );
}

Account.propTypes = {
  isMobile: PropTypes.bool,
  setMobileMenu: PropTypes.func,
};

Account.defaultProps = {
  isMobile: false,
  setMobileMenu: () => {},
};

export default Account;
