import React from 'react';

const Footer = ({ footer }) => {
  return (
    <footer>
      <div className='audio'>
        <div className='audio-player'>
          <div className='track-info'>
            <img src={footer.img} alt='Cover Art' />
            <div className='track-details'>
              <h3 className='track-title'>{footer.title}</h3>
              <p className='artist-name'>{footer.song}</p>
            </div>
          </div>
          <audio controls>
            <source src={footer.music} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
