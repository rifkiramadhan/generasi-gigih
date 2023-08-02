import React from 'react';

// Komponen Family
const Family = () => {
  const familys = [
    { name: 'Papa', gender: 'Male' },
    { name: 'Mama', gender: 'Female' },
    { name: 'Aku', gender: 'Male' },
    { name: 'Adik 1', gender: 'Male' },
    { name: 'Adik 2', gender: 'Male' },
    { name: 'Adik 3', gender: 'Male' },
  ];

  return (
    <div>
      <h1>Daftar Anggota Keluarga</h1>
      <ul style={{ color: 'black' }}>
        {familys.map((family, index) => (
          <li key={index}>
            {family.name} ({family.gender})
          </li>
        ))}
      </ul>
    </div>
  );
};

// Komponen App
const App = () => {
  return (
    <div>
      <h1>Ini adalah aplikasi saya</h1>
      <Family />
    </div>
  );
};

export default App;
