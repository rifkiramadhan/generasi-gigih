import React from 'react';
import rossaImage from '../../assets/images/rossa.jpeg';
import mahaliniImage from '../../assets/images/mahalini.jpeg';
import lyodraImage from '../../assets/images/lyodra.jpeg';
import arielImage from '../../assets/images/ariel.jpeg';

function Banner() {
  return (
    <div className='gradient_container'>
      <div className='banner'>
        <div className='song'>
          <figure>
            <img src={rossaImage} alt='' />
          </figure>
        </div>
        <div className='song'>
          <figure>
            <img src={mahaliniImage} alt='' />
          </figure>
        </div>
        <div className='song'>
          <figure>
            <img src={lyodraImage} alt='' />
          </figure>
        </div>
        <div className='song'>
          <figure>
            <img src={arielImage} alt='' />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Banner;
