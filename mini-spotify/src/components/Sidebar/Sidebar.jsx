import React, { Fragment } from 'react';

const Sidebar = ({ menuItems }) => {
  return (
    <aside>
      <div className='menu'>
        {menuItems.map((item, index) => (
          <a href={item.link} key={index}>
            <span>
              {item.text === 'Spotify' ? (
                <Fragment>
                  <img src={item.img} width={40} alt='Spotify Icon' />
                  <span className='spotify_text'>{item.text}</span>
                </Fragment>
              ) : (
                <Fragment>
                  <img src={item.img} alt='Sidebar Icon' />
                  <span className='sidebar_text'>{item.text}</span>
                </Fragment>
              )}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
