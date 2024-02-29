import './App.css';
import { Suspense,lazy } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const Home = lazy(() => import ('./Home'));
const Login = lazy(() => import ('./Login'));
const Register = lazy(() => import ('./Register'));



function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Suspense fallback={<>...Loading</>}>
            <Login />
          </Suspense>}/>
        <Route path="/register" element={<Register/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
