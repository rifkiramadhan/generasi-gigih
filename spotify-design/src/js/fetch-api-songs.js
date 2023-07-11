fetch('http://localhost:3000/playlist')
  .then((response) => response.json())
  .then((apiData) => {
    // Menghandle data artist
    if (Array.isArray(apiData.artists)) {
      const playlistContainer = document.querySelector('.genres');
      apiData.artists.forEach((item) => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'cards';
        playlistCard.innerHTML = `
          <div class="card_image">
            <img src="${item.image}" alt="" />
          </div>
          <div class="card_text">
            <h4>${item.artist}</h4>
            <img src="./src/assets/images/play.svg" alt="" />
          </div>
        `;
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

    if (Array.isArray(apiData.banners)) {
      const bannerContainer = document.querySelector('.banner');
      apiData.banners.forEach((item) => {
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
  })
  .catch((error) => {
    console.error('Error displaying Spotify Playlist:', error.message);
  });

fetch('http://localhost:3000/songs')
  .then((response) => response.json())
  .then((data) => {
    if (Array.isArray(data.work)) {
      const workContainer = document.getElementById('work');
      data.work.forEach((item) => {
        const workCard = document.createElement('div');
        workCard.className = 'playlist_card';
        workCard.innerHTML = `
          <img src="${item.image}" alt="" />
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        `;
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

    if (Array.isArray(data.sleep)) {
      const sleepContainer = document.getElementById('sleep');
      data.sleep.forEach((item) => {
        const sleepCard = document.createElement('div');
        sleepCard.className = 'playlist_card';
        sleepCard.innerHTML = `
            <img src="${item.image}" alt="" />
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          `;
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
