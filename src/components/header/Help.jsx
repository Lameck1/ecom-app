import React, { useRef } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import useOnClickOutside from '../../customHooks/useOnClickOutside';

function Help({ isMobile, setMobileMenu }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const helpMenu = useRef(null);
  useOnClickOutside(helpMenu, () => setIsOpen(false));

  const toggleMenu = () => isMobile && setMobileMenu(() => false);

  return (
    <div
      ref={helpMenu}
      className={`${styles.menu} ${isMobile && ' menu'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <BiHelpCircle />
      <span>Help</span>
      {!isMobile ? isOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> : null}
      <div
        className={isOpen ? styles['menu-items'] : styles['menu-items-hidden']}
      >
        <NavLink
          to='/help-center'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Help Center
        </NavLink>
        <NavLink
          to='/order-cancelation'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Order Cancellation
        </NavLink>
        <NavLink
          to='/returns-and-refunds'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Returns and Refunds
        </NavLink>
        <NavLink
          to='/contact'
          className={styles['menu-item']}
          onClick={toggleMenu}
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

Help.propTypes = {
  isMobile: PropTypes.bool,
  setMobileMenu: PropTypes.func,
};

Help.defaultProps = {
  isMobile: false,
  setMobileMenu: () => {},
};

export default Help;
