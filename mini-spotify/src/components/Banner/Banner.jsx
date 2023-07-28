import React from 'react';

const Banner = ({ banners }) => {
  return (
    <div className='gradient_container'>
      <div className='banner'>
        {banners.map((banner, index) => (
          <div className='song' key={index}>
            <figure>
              <img src={banner.img} alt='' />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
