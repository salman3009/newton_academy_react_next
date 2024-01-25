import React from 'react';
import './index.css'; // Link to your CSS file
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {SingleProduct} from './SingleProduct';
import {Favorite} from './Favorite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <Link to="/product/343">Go to Products</Link>
      <br/>
       <Link to="/favorite?query=react">Go to Favorite</Link>
      </nav>
        <Routes>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/product/:id" element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;