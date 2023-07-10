// Mengambil data Spotify Playlist dan Banner
fetch('http://localhost:3000/playlist')
  .then((response) => response.json())
  .then((data) => {
    if (Array.isArray(data.artist)) {
      const playlistContainer = document.querySelector('.genres');
      data.artist.forEach((item) => {
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
      });
    }
    console.log(data.artist);

    if (Array.isArray(data.banner)) {
      const bannerContainer = document.querySelector('.banner');
      data.banner.forEach((item) => {
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
    console.log(data.banner);
  })
  .catch((error) => {
    console.error('Error displaying Spotify Playlist:', error.message);
  });

// Mengambil data Work dan Sleep
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
      });
    }
    console.log(data.work);

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
      });
    }
    console.log(data.sleep);
  })
  .catch((error) => {
    console.error('Error displaying Work and Sleep Songs:', error.message);
  });
