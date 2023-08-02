import React from 'react';
import { playIcon } from '../../dataDummy';

const Recommendations = ({ rec }) => {
  return (
    <article className='content_container'>
      <div className='titles'>
        <h2>Recommendations</h2>
      </div>

      <div className='genres'>
        {rec.map((track) => (
          <div className='cards' key={track.id}>
            {track.album.images.length && (
              <div className='card_image'>
                <img width={'100%'} src={track.album.images[0].url} alt='' />
              </div>
            )}
            <div className='card_text'>
              <h4>{track.name}</h4>
              <img src={playIcon} alt='Play' />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Recommendations;
