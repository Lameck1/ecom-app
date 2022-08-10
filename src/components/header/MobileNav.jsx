import React from 'react';
import Account from './Account';
import Help from './Help';

function MobileNav({ mobileMenu }) {
  return (
    <>
      <nav className={'mobile-nav'}>
        <Account isMobile={'true'} />
        <Help isMobile={'true'} />
      </nav>
      <style jsx>
        {`
          .mobile-nav {
            transform: ${mobileMenu ? 'translateX(0%)' : 'translateX(-100%)'};
            width: 60%;
            height: 100vh;
            position: fixed;
            background: #fff;
            border-right: 1px solid #e6e6e6;
            top: 0;
            left: 0;
            padding: 6rem 0.5rem 0;
            will-change: transform;
            z-index: 999;
            transition: all 0.5s ease;
          }

          .menu > span,
          .menu > svg {
            font-size: 1.5rem;
            margin-left: 0.5rem;
            font-weight: bold;
          }

          .menu > div {
            border-top: 1px solid #e6e6e6;
            display: flex;
            flex-direction: column;
            margin: 1rem 0;
          }

          .menu > div > a {
            text-decoration: none;
            color: #000;
            font-weight: 500;
            font-size: 1.3rem;
            padding: 0.5rem 2.3rem;
          }

          @media screen and (min-width: 992px) {
            .mobile-nav {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}

export default MobileNav;
