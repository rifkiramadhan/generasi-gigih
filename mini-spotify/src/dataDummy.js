import rossaImage from './assets/images/rossa.jpeg';
import mahaliniImage from './assets/images/mahalini.jpeg';
import lyodraImage from './assets/images/lyodra.jpeg';
import arielImage from './assets/images/ariel.jpeg';
import judikaImage from './assets/images/judika.jpeg';
import anjiImage from './assets/images/anji.jpeg';
import work1Image from './assets/images/work1.jpg';
import work2Image from './assets/images/work2.jpg';
import work3Image from './assets/images/work3.jpeg';
import work4Image from './assets/images/work4.jpeg';
import sleep1Image from './assets/images/sleep1.jpeg';
import sleep2Image from './assets/images/sleep2.jpeg';
import sleep3Image from './assets/images/sleep3.jpg';
import sleep4Image from './assets/images/sleep4.jpeg';
import playSVG from './assets/images/play.svg';
import spotifyIcon from './assets/icons/spotify-icon.png';
import homeImage from './assets/images/home.svg';
import searchImage from './assets/images/search.svg';
import libraryImage from './assets/images/library.svg';
import addImage from './assets/images/add.svg';
import heartImage from './assets/images/heart.svg';
import anjiMusic from './assets/audio/anji-dia.mp3';
import prevIcon from './assets/images/prev.svg';
import nextIcon from './assets/images/next.svg';
import userIcon from './assets/images/user.svg';
import salirIcon from './assets/images/salir.svg';

export const songsData = [
  { img: rossaImage, title: 'Rossa' },
  { img: mahaliniImage, title: 'Mahalini' },
  { img: lyodraImage, title: 'Lyodra' },
  { img: arielImage, title: 'Noah' },
  { img: judikaImage, title: 'Judika' },
  { img: anjiImage, title: 'Anji' },
];

export const workPlaylists = [
  {
    img: work1Image,
    title: 'This Is Work Music',
    description: 'This Is Work Music',
  },
  {
    img: work2Image,
    title: 'This Is Upbeat Work Music',
    description: 'This Is Upbeat Work Music',
  },
  {
    img: work3Image,
    title: 'Music for a Workday',
    description: 'Music for a Workday',
  },
  {
    img: work4Image,
    title: 'Music for Writing',
    description: 'Music for Writing',
  },
];

export const sleepPlaylists = [
  { img: sleep1Image, title: 'Sleep', description: 'Sleep' },
  { img: sleep2Image, title: 'Deep Sleep', description: 'Deep Sleep' },
  { img: sleep3Image, title: 'Sleep', description: 'Sleep' },
  {
    img: sleep4Image,
    title: 'Songs For Sleeping',
    description: 'Songs For Sleeping',
  },
];

export const playIcon = playSVG;

export const bannerData = [
  { img: rossaImage },
  { img: mahaliniImage },
  { img: lyodraImage },
  { img: arielImage },
];

export const footerData = {
  img: anjiImage,
  title: 'Anji',
  song: 'Dia',
  music: anjiMusic,
};

export const sidebarData = [
  { img: spotifyIcon, text: 'Spotify', link: '/spotify' },
  { img: homeImage, text: 'Home', link: '#' },
  { img: searchImage, text: 'Search', link: '/search' },
  { img: libraryImage, text: 'Collection', link: '/collections' },
  { img: addImage, text: 'Create List', link: '/create-list' },
  { img: heartImage, text: 'You Like', link: '/you-like' },
];

export const headerData = {
  prevIcon,
  nextIcon,
  userIcon,
  salirIcon,
  username: 'User',
};
