import React from 'react';
import prevIcon from '../../assets/images/prev.svg';
import nextIcon from '../../assets/images/next.svg';
import userIcon from '../../assets/images/user.svg';
import salirIcon from '../../assets/images/salir.svg';

function Header() {
  return (
    <header>
      <div className='prev_next_buttons'>
        <span className='btn_prev'>
          <img src={prevIcon} alt='' />
        </span>
        <span className='btn_next'>
          <img src={nextIcon} alt='' />
        </span>
      </div>
      <div className='subscription'>
        <div className='upgrade_account'>
          <button>Upgrade Your Account</button>
        </div>
        <div className='profile'>
          <span className='circle'>
            <img src={userIcon} alt='' />
          </span>
          <span className='name'>User</span>
          <span>
            <img src={salirIcon} alt='' />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
