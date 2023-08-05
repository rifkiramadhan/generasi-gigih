import React from 'react';
import { playIcon } from '../../dataDummy';
import loadingImage from '../../../src/assets/gif/loading-image.gif';
import PropTypes from 'prop-types';

const Recommendations = ({ recs, onPlay }) => {
  return (
    <article className='content_container'>
      <div className='titles'>
        <h2>Recommendations</h2>
      </div>

      <div className='genres'>
        {recs.map((rec, index) => (
          <div
            className='cards'
            onClick={() => onPlay(rec.artists[0].id)}
            key={rec.id + index}
          >
            {rec.album.images.length ? (
              <div className='card_image'>
                <img width={'100%'} src={rec.album.images[0].url} alt='' />
              </div>
            ) : (
              <div className='card_image'>
                <img width={'100%'} src={loadingImage} alt='' />
              </div>
            )}
            <div className='card_text'>
              <h4>{rec.name}</h4>
              <img src={playIcon} alt='Play' />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

Recommendations.propTypes = {
  rec: PropTypes.array,
  onPlay: PropTypes.func,
};

export default Recommendations;
