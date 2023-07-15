// Fungsi untuk membuat Paragraf Daftar playlist Kosong
const createEmptyPlaylist = () => {
  const playlistContainer = document.querySelector('#yourPlaylist');
  playlistContainer.innerHTML = '';

  const emptyMessage = document.createElement('p');
  emptyMessage.textContent = 'Daftar Playlist Anda masih kosong';
  playlistContainer.appendChild(emptyMessage);
};

// Fungsi uk mmbuat other card playlist
const createOtherPlaylistCard = (otherPlaylistCard) => {
  const playlistCard = document.createElement('div');
  playlistCard.className = 'cards';
  playlistCard.innerHTML = `
    <div class="card_image">
      <img src="${otherPlaylistCard.image}" alt="" />
    </div>
    <div class="card_text">
      <h4>${otherPlaylistCard.artists}</h4>
      <img src="./src/assets/images/play.svg" alt="" />
    </div>
  `;
  return playlistCard;
};

// Fungsi untuk membuat gendres playlist card
const createGenresPlaylistCard = (genresPlaylistCard) => {
  const playlistGenresCard = document.createElement('div');
  playlistGenresCard.className = 'cards';
  playlistGenresCard.innerHTML = `
    <div class="card_image">
      <img src="${genresPlaylistCard.image}" alt="" />
    </div>
    <div class="card_text">
      <h4>${genresPlaylistCard.artist}</h4>
      <img src="./src/assets/images/play.svg" alt="" />
    </div>
  `;
  return playlistGenresCard;
};

// Fungsi untuk membuat work card
const createWorkCard = (workCard) => {
  const workPlaylistCard = document.createElement('div');
  workPlaylistCard.className = 'playlist_card';
  workPlaylistCard.innerHTML = `
    <img src="${workCard.image}" alt="" />
    <h4>${workCard.title}</h4>
    <p>${workCard.description}</p>
  `;
  return workPlaylistCard;
};

// Fungsi untuk membuat sleep card
const createSleepCard = (sleepCard) => {
  const sleepPlaylistCard = document.createElement('div');
  sleepPlaylistCard.className = 'playlist_card';
  sleepPlaylistCard.innerHTML = `
    <img src="${sleepCard.image}" alt="" />
    <h4>${sleepCard.title}</h4>
    <p>${sleepCard.description}</p>
  `;
  return sleepPlaylistCard;
};

// fungsi untuk menambah count playlist song dari Your Playlist
const playPlaylistSong = (index) => {
  if (index === undefined) {
    console.error('Invalid song index');
    return;
  }

  fetch(`http://localhost:3000/playlist/play/${index}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === 'Music Tidak Ditemukan') {
        console.log('Music Tidak Ditemukan');
      } else {
        console.log('Music Dimainkan:', data);

        // Update play count dynamically
        const playlistCards = document.querySelectorAll('.cards');
        const playlistCard = playlistCards[index];
        const playCount = playlistCard.querySelector('.play-count');

        if (playCount) {
          const newPlayCount = data.song.playCount;
          playCount.textContent = `Diputar ${newPlayCount} Kali`;
        }
      }
    })
    .catch((error) => {
      console.error('An error occurred while playing the song:', error);
    });
};

// Fungsi untuk menampilkan Your Playlist card
const getPlaylistCard = () => {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';

  fetch('http://localhost:3000/playlist')
    .then((response) => response.json())
    .then((displayPlaylist) => {
      if (Array.isArray(displayPlaylist) && displayPlaylist.length > 0) {
        const playlistContainer = document.querySelector('#yourPlaylist');
        playlistContainer.innerHTML = '';

        displayPlaylist.forEach((item, index) => {
          const playlistCard = createOtherPlaylistCard(item);
          playlistContainer.appendChild(playlistCard);

          // Menambahkan count diputar ke Your Playlist card
          const playCount = document.createElement('p');
          playCount.className = 'play-count';
          playCount.textContent = `Diputar ${item.playCount} Kali`;
          playlistCard.appendChild(playCount);

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
            playPlaylistSong(index); // Call playPlaylistSong function to play the song with a specific index
          });
        });

        loadingElement.style.display = 'none';
      } else {
        createEmptyPlaylist();

        loadingElement.style.display = 'none';
      }
    })
    .catch((error) => {
      console.error('Error displaying Spotify Playlist:', error.message);
    });
};

// Fungsi untuk menampilkan Banner dan Other Playlist
const getBannersAndOtherPlaylistCard = () => {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';

  fetch('http://localhost:3000/playlist/other-playlist')
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data.banners)) {
        const bannerContainer = document.querySelector('.banner');
        data.banners.forEach((item) => {
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

      if (Array.isArray(data.artists)) {
        const playlistContainer = document.querySelector('#genres');
        playlistContainer.innerHTML = '';

        data.artists.forEach((item) => {
          const playlistCard = createGenresPlaylistCard(item);
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

      loadingElement.style.display = 'none';
    })
    .catch((error) => {
      console.error('Error displaying Spotify Playlist:', error.message);

      loadingElement.style.display = 'none';
    });
};

// Fungsi untuk menampilkan Sleep Songs card
const getWorkAndSleepSongsCard = () => {
  fetch('http://localhost:3000/songs')
    .then((response) => response.json())
    .then((workSleep) => {
      if (Array.isArray(workSleep.work)) {
        const workContainer = document.getElementById('work');
        workContainer.innerHTML = '';

        workSleep.work.forEach((item) => {
          const workCard = createWorkCard(item);
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

      if (Array.isArray(workSleep.sleep)) {
        const sleepContainer = document.getElementById('sleep');
        sleepContainer.innerHTML = '';

        workSleep.sleep.forEach((item) => {
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

// Fungsi untuk menambahkan data Your Playlist dari Modal
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
      console.log('Data berhasil dikirim' + response);
      getPlaylistCard();

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

// Fungsi untuk mencari nama artis dan judul lagu
const searchPlaylist = (event) => {
  event.preventDefault();

  const searchTerm = document
    .getElementById('searchPlaylistInput')
    .value.toLowerCase();

  fetch('http://localhost:3000/playlist')
    .then((response) => response.json())
    .then((displayPlaylist) => {
      if (Array.isArray(displayPlaylist)) {
        const playlistContainer = document.querySelector('#yourPlaylist');
        playlistContainer.innerHTML = '';

        displayPlaylist.forEach((item) => {
          if (
            item.artists.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm)
          ) {
            const playlistCard = createOtherPlaylistCard(item);
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
    .then((displayOtherPlaylist) => {
      if (Array.isArray(displayOtherPlaylist.artists)) {
        const playlistOtherContainer = document.querySelector('#genres');
        playlistOtherContainer.innerHTML = '';

        displayOtherPlaylist.artists.forEach((item) => {
          if (
            item.artist.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
          ) {
            const playlistOtherCard = createGenresPlaylistCard(item);
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
    .then((workSleep) => {
      if (Array.isArray(workSleep.work)) {
        const workContainer = document.getElementById('work');
        workContainer.innerHTML = '';

        workSleep.work.forEach((item) => {
          if (
            item.artist.toLowerCase().includes(searchTerm) ||
            item.title.toLowerCase().includes(searchTerm)
          ) {
            const workCard = createWorkCard(item);
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

      if (Array.isArray(workSleep.sleep)) {
        const sleepContainer = document.getElementById('sleep');
        sleepContainer.innerHTML = '';

        workSleep.sleep.forEach((item) => {
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

// Fungsi untuk mengaktifkan menu sidebar warna abu-abu
const handleMenuItemClick = (event) => {
  const menuItem = event.target;
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    item.classList.remove('active');
  });

  menuItem.classList.add('active');
};

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', handleMenuItemClick);
});

// Fungsi untuk membuka form modal
const openModal = () => {
  document.getElementById('modal').style.display = 'block';
};

// Fungsi untuk menutup form modal
const closeModal = () => {
  document.getElementById('modal').style.display = 'none';
};

// Fungsi untuk meload data dari setiap fungsi
document.addEventListener('DOMContentLoaded', () => {
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';

  getPlaylistCard();
  getBannersAndOtherPlaylistCard();
  getWorkAndSleepSongsCard();

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

  loadingElement.style.display = 'none';
});
