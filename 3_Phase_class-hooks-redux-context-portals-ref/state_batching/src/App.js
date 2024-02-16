import React, { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState();
  const [city, setCity] = useState();

  // Sync Function call
  const onLoadUser = () => {
    setName('Rahul');
    setCity('Bangalore');
  };

  useEffect(() => {
    console.log(`UseEffect Called: userDeatils ${name} ${city}`);
  }, [name, city]);

  return (
    <div>
      <h1>Print User details</h1>
      <p>
        User Name: <strong>{name}</strong>
      </p>
      <p>
        City: <strong>{city}</strong>
      </p>
      <button onClick={onLoadUser}>Fetch user details</button>
    </div>
  );
}