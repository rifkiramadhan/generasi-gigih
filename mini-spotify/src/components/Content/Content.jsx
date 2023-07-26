import React from 'react';
import playSVG from '../../assets/images/play.svg';
import rossaImage from '../../assets/images/rossa.jpeg';
import mahaliniImage from '../../assets/images/mahalini.jpeg';
import lyodraImage from '../../assets/images/lyodra.jpeg';
import arielImage from '../../assets/images/ariel.jpeg';
import judikaImage from '../../assets/images/judika.jpeg';
import anjiImage from '../../assets/images/anji.jpeg';
import work1Image from '../../assets/images/work1.jpg';
import work2Image from '../../assets/images/work2.jpg';
import work3Image from '../../assets/images/work3.jpeg';
import work4Image from '../../assets/images/work4.jpeg';
import sleep1Image from '../../assets/images/sleep1.jpeg';
import sleep2Image from '../../assets/images/sleep2.jpeg';
import sleep3Image from '../../assets/images/sleep3.jpg';
import sleep4Image from '../../assets/images/sleep4.jpeg';

function Content() {
  return (
    <article className='content_container'>
      <div className='titles'>
        <h1>Spotify Playlist</h1>
      </div>
      <div className='genres'>
        <div className='cards'>
          <div className='card_image'>
            <img src={rossaImage} alt='' />
          </div>
          <div className='card_text'>
            <h4>Rossa</h4>
            <img src={playSVG} alt='' />
          </div>
        </div>
        <div className='cards'>
          <div className='card_image'>
            <img src={mahaliniImage} alt='' />
          </div>
          <div className='card_text'>
            <h4>Mahalini</h4>
            <img src={playSVG} alt='' />
          </div>
        </div>
        <div className='cards'>
          <div className='card_image'>
            <img src={lyodraImage} alt='' />
          </div>
          <div className='card_text'>
            <h4>Lyodra</h4>
            <img src={playSVG} alt='' />
          </div>
        </div>
        <div className='cards'>
          <div className='card_image'>
            <img src={arielImage} alt='' />
          </div>
          <div className='card_text'>
            <h4>Noah</h4>
            <img src={playSVG} alt='' />
          </div>
        </div>
        <div className='cards'>
          <div className='card_image'>
            <img src={judikaImage} alt='' />
          </div>
          <div className='card_text'>
            <h4>Judika</h4>
            <img src={playSVG} alt='' />
          </div>
        </div>
        <div className='cards'>
          <div className='card_image'>
            <img src={anjiImage} alt='' />
          </div>
          <div className='card_text'>
            <h4>Anji</h4>
            <img src={playSVG} alt='' />
          </div>
        </div>
      </div>

      <div className='titles'>
        <h2>Work</h2>
      </div>

      <div className='playlist'>
        <div className='playlist_card'>
          <img src={work1Image} alt='' />
          <h4>This Is Work Music</h4>
          <p>This Is Work Music</p>
        </div>
        <div className='playlist_card'>
          <img src={work2Image} alt='' />
          <h4>This Is Upbeat Work Music</h4>
          <p>This Is Upbeat Work Music</p>
        </div>
        <div className='playlist_card'>
          <img src={work3Image} alt='' />
          <h4>Music for a Workday</h4>
          <p>Music for a Workday</p>
        </div>
        <div className='playlist_card'>
          <img src={work4Image} alt='' />
          <h4>Music for Writing</h4>
          <p>Music for Writing</p>
        </div>
      </div>

      <div className='titles'>
        <h2>Sleep</h2>
      </div>

      <div className='playlist'>
        <div className='playlist_card'>
          <img src={sleep1Image} alt='' />
          <h4>Sleep</h4>
          <p>Sleep</p>
        </div>
        <div className='playlist_card'>
          <img src={sleep2Image} alt='' />
          <h4>Deep Sleep</h4>
          <p>Deep Sleep</p>
        </div>
        <div className='playlist_card'>
          <img src={sleep3Image} alt='' />
          <h4>Sleep</h4>
          <p>Sleep</p>
        </div>
        <div className='playlist_card'>
          <img src={sleep4Image} alt='' />
          <h4>Songs For Sleeping</h4>
          <p>Songs For Sleeping</p>
        </div>
      </div>
    </article>
  );
}

export default Content;
