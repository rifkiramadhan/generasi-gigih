import React, { Fragment } from 'react';

const Sidebar = ({
  menuItems,
  onRecommendationClick,
  onSidebarClick,
  token,
}) => {
  console.log('onRecommendationClick function:', onRecommendationClick);

  return (
    <aside>
      <div className='menu'>
        {menuItems
          .filter((item) => item.text !== 'Recommendations' || token)
          .map((item, index) => (
            <a
              href={item.link}
              key={index}
              onClick={(e) => onSidebarClick(e, item)}
            >
              <span>
                {item.text === 'Spotify' ? (
                  <Fragment>
                    <img src={item.img} width={45} alt='Spotify Icon' />
                    <span className='spotify_text'>{item.text}</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <img src={item.img} width={25} alt='Sidebar Icon' />
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
