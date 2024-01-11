import {Link, Outlet } from 'react-router-dom';

const User = () => {
    return (
      <>
        <h1>User</h1>
        <nav>
          <Link to="profile">Profile</Link>
          <Link to="account">Account</Link>
        </nav>
        <Outlet />
      </>
    );
  };

  export default User;