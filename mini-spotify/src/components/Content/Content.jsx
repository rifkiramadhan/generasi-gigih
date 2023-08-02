import React from 'react';
import { playIcon } from '../../dataDummy';
import loadingImage from '../../../src/assets/gif/loading-image.gif';

const Content = ({ songs, workPlaylists, sleepPlaylists, artists }) => {
  return (
    <article className='content_container'>
      <div className='titles'>
        <h2>Spotify Playlist</h2>
      </div>

      {artists.length === 0 ? (
        <div className='genres'>
          {songs.map((song, index) => (
            <div className='cards' key={`song-${index}`}>
              <div className='card_image'>
                <img src={song.img} alt={song.title} />
              </div>
              <div className='card_text'>
                <h4>{song.title}</h4>
                <img src={playIcon} alt='Play' />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='genres'>
          {artists.map((artist) => (
            <div className='cards' key={artist.id}>
              {artist.images.length ? (
                <div className='card_image'>
                  <img width={'100%'} src={artist.images[0].url} alt='' />
                </div>
              ) : (
                <div className='card_image'>
                  <img width={'100%'} src={loadingImage} alt='' />
                </div>
              )}
              <div className='card_text'>
                <h4>{artist.name}</h4>
                <img src={playIcon} alt='Play' />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className='titles'>
        <h2>Work</h2>
      </div>

      <div className='playlist'>
        {workPlaylists.map((playlist, index) => (
          <div className='playlist_card' key={`work-${index}`}>
            <img src={playlist.img} alt={playlist.title} />
            <h4>{playlist.title}</h4>
            <p>{playlist.description}</p>
          </div>
        ))}
      </div>

      <div className='titles'>
        <h2>Sleep</h2>
      </div>

      <div className='playlist'>
        {sleepPlaylists.map((playlist, index) => (
          <div className='playlist_card' key={`sleep-${index}`}>
            <img src={playlist.img} alt={playlist.title} />
            <h4>{playlist.title}</h4>
            <p>{playlist.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Content;
