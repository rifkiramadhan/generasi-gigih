import React, { useState, useEffect, useRef } from 'react';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirect_uri = 'http://localhost:3000/';
const scopes = [
  'user-read-private',
  'user-read-email',
  'user-modify-playback-state',
];

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

  function handleLogin() {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const queryParams = new URLSearchParams({
      client_id,
      response_type: 'token',
      redirect_uri,
      scope: scopes.join(' '),
    });
    window.location = `${authEndpoint}?${queryParams}`;
  }

  function handleSearch(e) {
    e.preventDefault();
    const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      searchTerm
    )}&type=track`;
    fetch(searchEndpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((response) => response.json())
      .then((data) => setSearchResults(data.tracks.items))
      .catch((error) => console.log(error));
  }

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function renderSearchResults() {
    return (
      <ul>
        {searchResults.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artists[0].name}
            <button
              onClick={() => {
                handlePlay(track.preview_url);
                setCurrentTrack(`${track.name} by ${track.artists[0].name}`);
              }}
            >
              Play
            </button>
          </li>
        ))}
      </ul>
    );
  }

  function handlePlay(previewUrl) {
    if (audioRef.current) {
      audioRef.current.src = previewUrl;
      audioRef.current.play();
    }
  }

  useEffect(() => {
    function extractAccessToken() {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const token = hashParams.get('access_token');
      setAccessToken(token);
    }

    if (!accessToken) {
      extractAccessToken();
    }
  }, [accessToken]);

  return (
    <div>
      {accessToken ? (
        <div>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <button type='submit'>Search</button>
          </form>
          {searchResults.length > 0 && renderSearchResults()}
          {currentTrack && <p>Now playing: {currentTrack}</p>}
          <audio ref={audioRef} controls />
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Spotify</button>
      )}
    </div>
  );
}

export default App;
