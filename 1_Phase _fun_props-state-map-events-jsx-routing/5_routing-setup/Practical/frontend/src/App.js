import Header from './Header';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Post from './Post';
import About from './About';
import User from './User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['token'] = sessionStorage.getItem('token');
    config.headers['email'] = sessionStorage.getItem('email');
    return config;
  })
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/:user" element={<User />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
