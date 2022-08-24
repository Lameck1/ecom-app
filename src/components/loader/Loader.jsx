import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Loader.module.scss';
import loaderAnim from '../../assets/three-dots.svg';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles['loader-container']}>
      <div className='loader'>
        <img
          src={loaderAnim}
          alt='Loading...'
          className={styles['loader-anim']}
        />
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Loader;
