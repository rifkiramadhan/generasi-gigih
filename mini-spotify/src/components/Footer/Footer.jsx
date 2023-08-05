import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footer, audioRef, currentTrack }) => {
  const title = currentTrack ? currentTrack.name : footer.title;
  const artist =
    currentTrack && currentTrack.artists[0]
      ? currentTrack.artists[0].name
      : footer.song;
  const image = currentTrack?.album?.images?.[0]?.url
    ? currentTrack.album.images[0].url
    : footer.img;
  return (
    <footer>
      <div className='audio'>
        <div className='audio-player'>
          <div className='track-info'>
            <img src={image} alt='Cover Art' />
            <div className='track-details'>
              <h3 className='track-title'>{title}</h3>
              <p className='artist-name'>{artist}</p>
            </div>
          </div>
          <audio ref={audioRef} controls>
            <source src={footer.music} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  audioRef: PropTypes.object,
  currentTrack: PropTypes.object,
};

export default Footer;
