import React from 'react';
import anjiImage from '../../assets/images/anji.jpeg';
import anjiMusic from '../../assets/audio/anji-dia.mp3';

function Footer() {
  return (
    <footer>
      <div className='audio'>
        <div className='audio-player'>
          <div className='track-info'>
            <img src={anjiImage} alt='Cover Art' />
            <div className='track-details'>
              <h3 className='track-title'>Anji</h3>
              <p className='artist-name'>Dia</p>
            </div>
          </div>
          <audio controls>
            <source src={anjiMusic} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
