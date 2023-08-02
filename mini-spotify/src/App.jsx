import React, { useState, useEffect, useCallback, Fragment } from 'react';
import {
  Sidebar,
  Header,
  Banner,
  Content,
  Footer,
  Recommendations,
} from './components';
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
} from './config/config';
import './App.css';
import axios from 'axios';

const App = () => {
  const [token, setToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [artists, setArtists] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const [data, setData] = useState({
    songsData: [],
    workPlaylists: [],
    sleepPlaylists: [],
    bannerData: [],
    footerData: {},
    sidebarData: [],
    headerData: {},
  });

  const handleSidebarItemClick = (e, item) => {
    if (item.text === 'Recommendations') {
      e.preventDefault();
      handleRecommendationClick();
      window.history.pushState({}, '', item.link);
    }
  };

  const getRecommendations = useCallback(async () => {
    try {
      const { data } = await axios.get(
        'https://api.spotify.com/v1/recommendations',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 21,
            seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
          },
        }
      );

      setRecommendations(data.tracks);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }, [token]);

  const handleRecommendationClick = useCallback(() => {
    getRecommendations();
    setShowRecommendations(true);
  }, [getRecommendations]);

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

    if (searchKey.trim() !== '') {
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
    } else {
      alert('Please enter a search keyword!');
    }
  };

  return (
    <div className='container'>
      {data.sidebarData.length > 0 && (
        <Sidebar
          token={token}
          menuItems={data.sidebarData}
          onSidebarClick={handleSidebarItemClick}
          onRecommendationClick={handleRecommendationClick}
        />
      )}
      <section>
        {data.headerData.username &&
        data.songsData.length > 0 &&
        data.workPlaylists.length > 0 &&
        data.sleepPlaylists.length > 0 &&
        data.bannerData.length > 0 &&
        showRecommendations &&
        recommendations.length > 0 ? (
          <Recommendations rec={recommendations} />
        ) : (
          <Fragment>
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
            <Banner banners={data.bannerData} />
            <Content
              artists={artists}
              songs={data.songsData}
              workPlaylists={data.workPlaylists}
              sleepPlaylists={data.sleepPlaylists}
            />
          </Fragment>
        )}
      </section>
      {data.footerData.song && <Footer footer={data.footerData} />}
    </div>
  );
};

export default App;
