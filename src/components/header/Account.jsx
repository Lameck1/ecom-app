import React, { useRef } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useOnClickOutside from '../../customHooks/useOnClickOutside';

function Account() {
  const [isOpen, setIsOpen] = React.useState(() => false);

  const accountMenu = useRef(null);
  useOnClickOutside(accountMenu, () => setIsOpen(false));

  return (
    <div
      ref={accountMenu}
      className={styles.menu}
      onClick={() => setIsOpen(!isOpen)}
      // onMouseLeave={() => setIsOpen(false)}
    >
      <FaUserAlt />
      <span>Acount</span>
      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      <div
        className={isOpen ? styles['menu-items'] : styles['menu-items-hidden']}
      >
        <Link to='/login' className={styles['menu-item']}>
          Login
        </Link>
        <Link to='/register' className={styles['menu-item']}>
          Register
        </Link>
        <Link to='/orders' className={styles['menu-item']}>
          Orders
        </Link>
      </div>
    </div>
  );
}

export default Account;
