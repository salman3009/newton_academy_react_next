import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const KeyValueStore = () => {
  
    const [keyValues, setKeyValues] = useState({});
  
    const updateKeyValue = (key, value) => {
      setKeyValues((prevState) => {
        return { ...prevState, [key]: value };
      });
    };
  
    const handleUpdateClick = () => {
      const searchParams = new URLSearchParams();
      Object.entries(keyValues).forEach(([key, value]) => {
        searchParams.append(key, value);
      });
      const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, "", newUrl);
    };
  
    const handleDeleteClick = (key) => {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.delete(key);
      const newUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, "", newUrl);
      setKeyValues((prevState) => {
        const newState = { ...prevState };
        delete newState[key];
        return newState;
      });
    };
  
    useEffect(() => {
      const searchParams = new URLSearchParams(window.location.search);
      const newKeyValues = {};
      for (const [key, value] of searchParams.entries()) {
        newKeyValues[key] = value;
      }
      setKeyValues(newKeyValues);
    }, []);
  
    return (
      <div>
        <h1>Key Value Store</h1>
        {Object.keys(keyValues).length > 0 ? (
          <div>
            {Object.entries(keyValues).map(([key, value]) => (
              <div key={key} className='key-value-div'>
                <span className='key-field'>{key}:</span>
                <input
                    className='value-field'
                    type="text"
                    value={value}
                    onChange={(e) => updateKeyValue(key, e.target.value)}
                />
                <button onClick={() => handleDeleteClick(key)} className='delete-btn'>Delete</button>
              </div>
            ))}
            <button onClick={handleUpdateClick} className='update-btn'>Update Values</button>
          </div>
        ) : (
          <p>No key values found in URL.</p>
        )}
      </div>
    )
}

export default KeyValueStore;