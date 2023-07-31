import React, { useState, useEffect } from 'react';
import { Sidebar, Header, Banner, Content, Footer } from './components';
import './App.css';
import axios from 'axios';

const App = () => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [artists, setArtists] = useState([]);

  const [data, setData] = useState({
    songsData: [],
    workPlaylists: [],
    sleepPlaylists: [],
    bannerData: [],
    footerData: {},
    sidebarData: [],
    headerData: {},
  });

  useEffect(() => {
    import('./dataDummy').then((importedData) => {
      setData({
        songsData: importedData.songsData,
        workPlaylists: importedData.workPlaylists,
        sleepPlaylists: importedData.sleepPlaylists,
        bannerData: importedData.bannerData,
        footerData: importedData.footerData,
        sidebarData: importedData.sidebarData,
        headerData: importedData.headerData,
      });
    });

    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
      },
    });

    setArtists(data.artists.items);
  };

  return (
    <div className='container'>
      {data.sidebarData.length > 0 && <Sidebar menuItems={data.sidebarData} />}
      <section>
        {data.headerData.username && (
          <Header
            searchArtists={searchArtists}
            setSearchKey={setSearchKey}
            responseType={RESPONSE_TYPE}
            authEndpoint={AUTH_ENDPOINT}
            redirectUri={REDIRECT_URI}
            clientId={CLIENT_ID}
            token={token}
            onLogout={logout}
            header={data.headerData}
          />
        )}
        {data.bannerData.length > 0 && <Banner banners={data.bannerData} />}
        {data.songsData.length > 0 &&
          data.workPlaylists.length > 0 &&
          data.sleepPlaylists.length > 0 && (
            <Content
              artists={artists}
              songs={data.songsData}
              workPlaylists={data.workPlaylists}
              sleepPlaylists={data.sleepPlaylists}
            />
          )}
      </section>
      {data.footerData.song && <Footer footer={data.footerData} />}
    </div>
  );
};

export default App;
