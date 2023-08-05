import React, {
  useState,
  useEffect,
  useCallback,
  Fragment,
  useRef,
} from 'react';
import loadingGif from './assets/gif/loading-image.gif';
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
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const { data } = await axios.get(
        'https://api.spotify.com/v1/recommendations',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 21,
            offset: recommendations.length,
            seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
          },
        }
      );

      if (data.tracks.length > 0) {
        setRecommendations((prevRecommendations) => [
          ...prevRecommendations,
          ...data.tracks,
        ]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [token, recommendations]);

  const handleRecommendationClick = useCallback(() => {
    getRecommendations();
    setShowRecommendations(true);
  }, [getRecommendations]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        !hasMore
      )
        return;
      getRecommendations();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, getRecommendations]);

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
      setLoading(true);

      try {
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

        // Get songs for each artist
        const songsPromises = data.artists.items.map((artist) =>
          axios.get(
            `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?country=US`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
        );

        const songsResponses = await Promise.all(songsPromises);
        const songsData = songsResponses.reduce(
          (songs, response) => [...songs, ...response.data.tracks],
          []
        );

        setData((prevData) => ({
          ...prevData,
          songsData,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a search keyword!');
    }
  };

  const onPlay = async (artistId) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Get the first song to play
      if (data.tracks && data.tracks.length > 0) {
        const song = data.tracks[0];
        setCurrentTrack(song);
        if (audioRef.current) {
          audioRef.current.src = song.preview_url;
          audioRef.current.load();
          audioRef.current.play().catch((error) => {
            console.error('Failed to start playback:', error);
          });
        }
      } else {
        alert('No top tracks available for this artist');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          <Fragment>
            <Recommendations rec={recommendations} />
            {loading && (
              <div className='loading'>
                <img src={loadingGif} alt='Loading...' />
              </div>
            )}
          </Fragment>
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
            {loading ? (
              <div className='loading'>
                <img src={loadingGif} alt='Loading...' />
              </div>
            ) : (
              <>
                <Banner banners={data.bannerData} />
                <Content
                  artists={artists}
                  songs={data.songsData}
                  workPlaylists={data.workPlaylists}
                  sleepPlaylists={data.sleepPlaylists}
                  onPlay={onPlay}
                />
              </>
            )}
          </Fragment>
        )}
      </section>

      {data.footerData.song && (
        <Footer
          footer={data.footerData}
          audioRef={audioRef}
          currentTrack={currentTrack}
        />
      )}
    </div>
  );
};

export default App;
