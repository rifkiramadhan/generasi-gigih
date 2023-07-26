import React from 'react';
import './Person.css';

const Person = ({ person }) => {
  const color = person.gender === 'female' ? 'lightcoral' : 'midnightblue';

  return <h1 style={{ color }}>{person.name}</h1>;
};

export default Person;
