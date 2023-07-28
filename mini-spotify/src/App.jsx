import React from 'react';
import { Sidebar, Header, Banner, Content, Footer } from './components';
import {
  songsData,
  workPlaylists,
  sleepPlaylists,
  bannerData,
  footerData,
  sidebarData,
  headerData,
} from './dataDummy';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Sidebar menuItems={sidebarData} />
      <section>
        <Header header={headerData} />
        <Banner banners={bannerData} />
        <Content
          songs={songsData}
          workPlaylists={workPlaylists}
          sleepPlaylists={sleepPlaylists}
        />
      </section>
      <Footer footer={footerData} />
    </div>
  );
};

export default App;
