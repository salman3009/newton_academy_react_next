import React from 'react';
import './App.css';
import ComponentC from './ComponentC';
export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
           <UserContext.Provider value={"salman"}>
           <ComponentC/>
           </UserContext.Provider>
    </div>
  );
}

export default App;
