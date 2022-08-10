import React, { useRef } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useOnClickOutside from '../../customHooks/useOnClickOutside';

function Help({ isMobile = false }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const helpMenu = useRef(null);
  useOnClickOutside(helpMenu, () => setIsOpen(false));

  return (
    <div
      ref={helpMenu}
      className={`${styles.menu} ${isMobile && ' menu'}`}
      onClick={() => setIsOpen(!isOpen)}
      // onMouseEnter={() => setIsOpen(true)}
      // onMouseLeave={() => setIsOpen(false)}
    >
      <BiHelpCircle />
      <span>Help</span>
      {!isMobile ? isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> : null}
      <div
        className={isOpen ? styles['menu-items'] : styles['menu-items-hidden']}
      >
        <Link to='/help-center' className={styles['menu-item']}>
          Help Center
        </Link>
        <Link to='/order-cancelation' className={styles['menu-item']}>
          Order Cancellation
        </Link>
        <Link to='/returns-and-refunds' className={styles['menu-item']}>
          Returns and Refunds
        </Link>
        <Link to='/contact' className={styles['menu-item']}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Help;
