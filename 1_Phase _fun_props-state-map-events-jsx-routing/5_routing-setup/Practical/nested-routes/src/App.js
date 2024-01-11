import Home from "./Home";
import Profile from "./Profile";
import User from "./User";
import Account from "./Account";
import NoMatch from "./NoMatch";
import { Routes, Route, Link,BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <h1>React Router</h1>

<nav>
  <Link to="/home">Home</Link>
  <Link to="/user">User</Link>
</nav>

<Routes>
  <Route index element={<Home />} />
  <Route path="home" element={<Home />} />
  <Route path="user" element={<User />}>
    <Route path="profile" element={<Profile />} />
    <Route path="account" element={<Account />} />
  </Route>
  <Route path="*" element={<NoMatch />} />
</Routes>
    </BrowserRouter>
    </>
   
   
     
    
  );
};

export default App;