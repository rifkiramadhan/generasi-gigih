import './App.css';
import React from 'react';
// import ParentComponent from './components/ParentComponent';
import Person from './components/Person';

// const avatars = [
//   {
//     name: 'Maria Sklodowska',
//     imageUrl:
//       'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRNW85-wpFRi46iFDU0x6TkJqBlAVE4wKytaSI6FBfqKw1UcDTZvsdikhLaGo2sUX-e',
//   },
//   {
//     name: 'Katsuko',
//     imageUrl:
//       'https://archive.mith.umd.edu/gcr/text/images/saruhashi_chemist.jpg',
//   },
// ];

const people = [
  { name: 'Alice', gender: 'female' },
  { name: 'Bob', gender: 'male' },
  { name: 'Carol', gender: 'female' },
  { name: 'David', gender: 'male' },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <ParentComponent avatars={avatars} />; */}
        {people.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </header>
    </div>
  );
}

export default App;
