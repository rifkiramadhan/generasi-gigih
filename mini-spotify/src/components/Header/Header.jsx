import React, { Fragment } from 'react';
import searchIcon from '../../assets/images/search.svg';

const Header = ({
  header,
  onLogout,
  token,
  clientId,
  redirectUri,
  authEndpoint,
  responseType,
  setSearchKey,
  searchArtists,
}) => {
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

      {token ? (
        <form className='search-form' onSubmit={searchArtists}>
          <input
            type='text'
            placeholder='Apa yang ingin anda dengarkan?'
            onChange={(e) => setSearchKey(e.target.value)}
            autoFocus
          />
          <button type={'submit'}>
            <img src={searchIcon} alt='Search' />
          </button>
        </form>
      ) : (
        <h2>Please login</h2>
      )}

      <div className='subscription'>
        <div className='upgrade_account'>
          <button>Upgrade Your Account</button>
        </div>
        <div className='profile'>
          <span className='name'>
            {!token ? (
              <a
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}
              >
                Login
              </a>
            ) : (
              <Fragment>
                <button onClick={onLogout}>Logout</button>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
