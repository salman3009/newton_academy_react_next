import './App.css';
import { Product } from './Product';
import { LanguageContext } from './LanguageContext';
import { Component } from 'react';

class App extends Component {


  render(){
    return (
      <div className="App">
        <LanguageContext>
          <Product />
        </LanguageContext>  
      </div>
    );
  }
  
}

export default App;
