import React, { useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useOnClickOutside from '../../customHooks/useOnClickOutside';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import toast from 'react-hot-toast';

function Account({ isMobile, setMobileMenu }) {
  const [isOpen, setIsOpen] = React.useState(() => false);

  const accountMenu = useRef(null);
  useOnClickOutside(accountMenu, () => setIsOpen(false));

  const toggleMenu = () => isMobile && setMobileMenu(() => false);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success('Successfully logged out!');
      })
      .catch((error) => {
        toast.error(error.code.split('/')[1].split('-').join(' '));
      });
  };

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
        <NavLink
          to='/login'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Login
        </NavLink>
        <NavLink
          to='/register'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Register
        </NavLink>
        <NavLink to='/' className={styles['menu-item']} onClick={logoutUser}>
          Logout
        </NavLink>
        <NavLink
          to='/orders'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Orders
        </NavLink>
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
