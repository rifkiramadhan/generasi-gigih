import React from 'react';

const Header = ({ header }) => {
  return (
    <header>
      <div className='prev_next_buttons'>
        <span className='btn_prev'>
          <img src={header.prevIcon} alt='' />
        </span>
        <span className='btn_next'>
          <img src={header.nextIcon} alt='' />
        </span>
      </div>
      <div className='subscription'>
        <div className='upgrade_account'>
          <button>Upgrade Your Account</button>
        </div>
        <div className='profile'>
          <span className='circle'>
            <img src={header.userIcon} alt='' />
          </span>
          <span className='name'>{header.username}</span>
          <span>
            <img src={header.salirIcon} alt='' />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
