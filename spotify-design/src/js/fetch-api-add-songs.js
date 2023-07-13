// Display pada Your Playlist setelah playlist dibuat pada form modal
const displayOtherPlaylistCard = (other_playlist_card) => {
  const playlistCard = document.createElement('div');
  playlistCard.className = 'cards';
  playlistCard.innerHTML = `
    <div class="card_image">
      <img src="${other_playlist_card.image}" alt="" />
    </div>
    <div class="card_text">
      <h4>${other_playlist_card.artists}</h4>
      <img src="./src/assets/images/play.svg" alt="" />
    </div>
  `;
  return playlistCard;
};

// Display pada Spotify Playlist dari data hard code yang sudah eksis
const displayGenresPlaylistCard = (genres_playlist_card) => {
  const playlistGenresCard = document.createElement('div');
  playlistGenresCard.className = 'cards';
  playlistGenresCard.innerHTML = `
    <div class="card_image">
      <img src="${genres_playlist_card.image}" alt="" />
    </div>
    <div class="card_text">
      <h4>${genres_playlist_card.artist}</h4>
      <img src="./src/assets/images/play.svg" alt="" />
    </div>
  `;
  return playlistGenresCard;
};

// Display pada Spotify Playlist dari data hard code yang sudah eksis
const displayWorkCard = (work_card) => {
  const workCard = document.createElement('div');
  workCard.className = 'playlist_card';
  workCard.innerHTML = `
    <img src="${work_card.image}" alt="" />
    <h4>${work_card.title}</h4>
    <p>${work_card.description}</p>
  `;
  return workCard;
};

// Sleep Songs
const createSleepCard = (sleep_card) => {
  const sleepCard = document.createElement('div');
  sleepCard.className = 'playlist_card';
  sleepCard.innerHTML = `
    <img src="${sleep_card.image}" alt="" />
    <h4>${sleep_card.title}</h4>
    <p>${sleep_card.description}</p>
  `;
  return sleepCard;
};

// Playlist
const displayPlaylistCard = () => {
  fetch('http://localhost:3000/playlist')
    .then((response) => response.json())
    .then((display_playlist) => {
      if (Array.isArray(display_playlist)) {
        const playlistContainer = document.querySelector('#yourPlaylist');
        playlistContainer.innerHTML = '';

        display_playlist.forEach((item) => {
          const playlistCard = displayOtherPlaylistCard(item);
          playlistContainer.appendChild(playlistCard);

          playlistCard.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            const coverArt = document.getElementById('coverArt');
            const trackTitle = document.getElementById('trackTitle');
            const artistDesc = document.getElementById('artistName');

            audioPlayer.src = item.url;
            coverArt.src = item.image;
            trackTitle.textContent = item.artists;
            artistDesc.textContent = item.title;

            while (audioPlayer.firstChild) {
              audioPlayer.removeChild(audioPlayer.firstChild);
            }

            const sourceElement = document.createElement('source');
            sourceElement.src = item.audio;
            sourceElement.type = 'audio/mpeg';
            audioPlayer.appendChild(sourceElement);

            audioPlayer.play();
          });
        });
      }
    })
    .catch((error) => {
      console.error('Error displaying Spotify Playlist:', error.message);
    });
};

const displayBannersAndOtherPlaylistCard = () => {
  fetch('http://localhost:3000/playlist/other-playlist')
    .then((response) => response.json())
    .then((data_banners_playlists) => {
      if (Array.isArray(data_banners_playlists.banners)) {
        const bannerContainer = document.querySelector('.banner');
        data_banners_playlists.banners.forEach((item) => {
          const bannerCard = document.createElement('div');
          bannerCard.className = 'song';
          bannerCard.innerHTML = `
            <figure>
              <img src="${item.image}" alt="" />
            </figure>
          `;
          bannerContainer.appendChild(bannerCard);
        });
      }

      if (Array.isArray(data_banners_playlists.artists)) {
        const playlistContainer = document.querySelector('#genres');
        playlistContainer.innerHTML = '';

        data_banners_playlists.artists.forEach((item) => {
          const playlistCard = displayGenresPlaylistCard(item);
          playlistContainer.appendChild(playlistCard);

          playlistCard.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            const coverArt = document.getElementById('coverArt');
            const trackTitle = document.getElementById('trackTitle');
            const artistDesc = document.getElementById('artistName');

            audioPlayer.src = item.audio;
            coverArt.src = item.image;
            trackTitle.textContent = item.artist;
            artistDesc.textContent = item.description;

            while (audioPlayer.firstChild) {
              audioPlayer.removeChild(audioPlayer.firstChild);
            }

            const sourceElement = document.createElement('source');
            sourceElement.src = item.audio;
            sourceElement.type = 'audio/mpeg';
            audioPlayer.appendChild(sourceElement);

            audioPlayer.play();
          });
        });
      }
    })
    .catch((error) => {
      console.error('Error displaying Spotify Playlist:', error.message);
    });
};

const displayWorkAndSleepSongsCard = () => {
  fetch('http://localhost:3000/songs')
    .then((response) => response.json())
    .then((work_sleep) => {
      if (Array.isArray(work_sleep.work)) {
        const workContainer = document.getElementById('work');
        work_sleep.work.forEach((item) => {
          const workCard = displayWorkCard(item);
          workContainer.appendChild(workCard);

          workCard.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            const coverArt = document.getElementById('coverArt');
            const trackTitle = document.getElementById('trackTitle');
            const artistName = document.getElementById('artistName');

            audioPlayer.src = item.audio;
            coverArt.src = item.image;
            trackTitle.textContent = item.title;
            artistName.textContent = item.artist;

            audioPlayer.play();
          });
        });
      }

      if (Array.isArray(work_sleep.sleep)) {
        const sleepContainer = document.getElementById('sleep');
        work_sleep.sleep.forEach((item) => {
          const sleepCard = createSleepCard(item);
          sleepContainer.appendChild(sleepCard);

          sleepCard.addEventListener('click', () => {
            const audioPlayer = document.getElementById('audioPlayer');
            const coverArt = document.getElementById('coverArt');
            const trackTitle = document.getElementById('trackTitle');
            const artistName = document.getElementById('artistName');

            audioPlayer.src = item.audio;
            coverArt.src = item.image;
            trackTitle.textContent = item.title;
            artistName.textContent = item.artist;

            audioPlayer.play();
          });
        });
      }
    })
    .catch((error) => {
      console.error('Error displaying Work and Sleep Songs:', error.message);
    });
};

const addPlaylistModal = (event) => {
  event.preventDefault();

  const image = document.getElementById('image').value;
  const title = document.getElementById('title').value;
  const artists = document.getElementById('artists').value;
  const url = document.getElementById('url').value;

  fetch('http://localhost:3000/playlist/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: image,
      title: title,
      artists: artists,
      url: url,
    }),
  })
    .then((response) => {
      console.log('Data berhasil dikirim');
      displayPlaylistCard();

      document.getElementById('image').value = '';
      document.getElementById('title').value = '';
      document.getElementById('artists').value = '';
      document.getElementById('url').value = '';
    })
    .catch((error) => {
      console.error('Terjadi kesalahan:', error);
    });

  document.getElementById('modal').style.display = 'none';
};

const handleMenuItemClick = (event) => {
  const menuItem = event.target;
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    item.classList.remove('active');
  });

  menuItem.classList.add('active');
};

const searchPlaylist = (event) => {
  event.preventDefault();

  const searchTerm = document
    .getElementById('searchPlaylistInput')
    .value.toLowerCase();

  fetch('http://localhost:3000/playlist')
    .then((response) => response.json())
    .then((display_playlist) => {
      if (Array.isArray(display_playlist)) {
        const playlistContainer = document.querySelector('#yourPlaylist');
        playlistContainer.innerHTML = '';

        display_playlist.forEach((item) => {
          if (
            item.artists.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm)
          ) {
            const playlistCard = displayOtherPlaylistCard(item);
            playlistContainer.appendChild(playlistCard);

            playlistCard.addEventListener('click', () => {
              const audioPlayer = document.getElementById('audioPlayer');
              const coverArt = document.getElementById('coverArt');
              const trackTitle = document.getElementById('trackTitle');
              const artistDesc = document.getElementById('artistName');

              audioPlayer.src = item.url;
              coverArt.src = item.image;
              trackTitle.textContent = item.artists;
              artistDesc.textContent = item.title;

              while (audioPlayer.firstChild) {
                audioPlayer.removeChild(audioPlayer.firstChild);
              }

              const sourceElement = document.createElement('source');
              sourceElement.src = item.audio;
              sourceElement.type = 'audio/mpeg';
              audioPlayer.appendChild(sourceElement);

              audioPlayer.play();
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error('Error displaying Spotify Playlist:', error.message);
    });

  fetch('http://localhost:3000/playlist/other-playlist')
    .then((response) => response.json())
    .then((display_other_playlist) => {
      if (Array.isArray(display_other_playlist.artists)) {
        const playlistOtherContainer = document.querySelector('#genres');
        playlistOtherContainer.innerHTML = '';

        display_other_playlist.artists.forEach((item) => {
          if (
            item.artist.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
          ) {
            const playlistOtherCard = displayGenresPlaylistCard(item);
            playlistOtherContainer.appendChild(playlistOtherCard);

            playlistOtherCard.addEventListener('click', () => {
              const audioPlayer = document.getElementById('audioPlayer');
              const coverArt = document.getElementById('coverArt');
              const trackTitle = document.getElementById('trackTitle');
              const artistDesc = document.getElementById('artistName');

              audioPlayer.src = item.audio;
              coverArt.src = item.image;
              trackTitle.textContent = item.artist;
              artistDesc.textContent = item.description;

              while (audioPlayer.firstChild) {
                audioPlayer.removeChild(audioPlayer.firstChild);
              }

              const sourceElement = document.createElement('source');
              sourceElement.src = item.audio;
              sourceElement.type = 'audio/mpeg';
              audioPlayer.appendChild(sourceElement);

              audioPlayer.play();
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error('Error displaying Spotify Playlist:', error.message);
    });

  fetch('http://localhost:3000/songs')
    .then((response) => response.json())
    .then((work_sleep) => {
      if (Array.isArray(work_sleep.work)) {
        const workContainer = document.getElementById('work');
        workContainer.innerHTML = '';

        work_sleep.work.forEach((item) => {
          if (
            item.artist.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm)
          ) {
            const workCard = displayWorkCard(item);
            workContainer.appendChild(workCard);

            workCard.addEventListener('click', () => {
              const audioPlayer = document.getElementById('audioPlayer');
              const coverArt = document.getElementById('coverArt');
              const trackTitle = document.getElementById('trackTitle');
              const artistName = document.getElementById('artistName');

              audioPlayer.src = item.audio;
              coverArt.src = item.image;
              trackTitle.textContent = item.title;
              artistName.textContent = item.artist;

              audioPlayer.play();
            });
          }
        });
      }

      if (Array.isArray(work_sleep.sleep)) {
        const sleepContainer = document.getElementById('sleep');
        sleepContainer.innerHTML = '';

        work_sleep.sleep.forEach((item) => {
          if (
            item.artist.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm)
          ) {
            const sleepCard = createSleepCard(item);
            sleepContainer.appendChild(sleepCard);

            sleepCard.addEventListener('click', () => {
              const audioPlayer = document.getElementById('audioPlayer');
              const coverArt = document.getElementById('coverArt');
              const trackTitle = document.getElementById('trackTitle');
              const artistName = document.getElementById('artistName');

              audioPlayer.src = item.audio;
              coverArt.src = item.image;
              trackTitle.textContent = item.title;
              artistName.textContent = item.artist;

              audioPlayer.play();
            });
          }
        });
      }
    })
    .catch((error) => {
      console.error('Error displaying Work and Sleep Songs:', error.message);
    });
};

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', handleMenuItemClick);
});

const openModal = () => {
  document.getElementById('modal').style.display = 'block';
};

const closeModal = () => {
  document.getElementById('modal').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  displayPlaylistCard();
  displayBannersAndOtherPlaylistCard();
  displayWorkAndSleepSongsCard();

  document
    .getElementById('playlistForm')
    .addEventListener('submit', addPlaylistModal);
  document.getElementById('openModalBtn').addEventListener('click', openModal);
  document
    .getElementsByClassName('close')[0]
    .addEventListener('click', closeModal);

  document
    .getElementById('searchPlaylistForm')
    .addEventListener('submit', searchPlaylist);
});
