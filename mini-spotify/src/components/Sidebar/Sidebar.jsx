import React from 'react';
import spotifyIcon from '../../assets/icons/spotify-icon.png';
import homeImage from '../../assets/images/home.svg';
import searchImage from '../../assets/images/search.svg';
import libraryImage from '../../assets/images/library.svg';
import addImage from '../../assets/images/add.svg';
import heartImage from '../../assets/images/heart.svg';

function Sidebar() {
  return (
    <aside>
      <div className='menu'>
        <a href='/spotify'>
          <span>
            <img src={spotifyIcon} width='40px' alt='' />
          </span>
          <span className='spotify_text'>Spotify</span>
        </a>
        <a className='active' href='#'>
          <span>
            <img src={homeImage} alt='' />
          </span>
          <span className='sidebar_text'>Home</span>
        </a>
        <a href='/search'>
          <span>
            <img src={searchImage} alt='' />
          </span>
          <span className='sidebar_text'>Search</span>
        </a>
        <a href='/collections'>
          <span>
            <img src={libraryImage} alt='' />
          </span>
          <span className='sidebar_text'>Collection</span>
        </a>
        <br />
        <a href='/create-list'>
          <span>
            <img src={addImage} alt='' />
          </span>
          <span className='sidebar_text'>Create List</span>
        </a>
        <a href='/you-like'>
          <span>
            <img src={heartImage} alt='' />
          </span>
          <span className='sidebar_text'>You Like</span>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
