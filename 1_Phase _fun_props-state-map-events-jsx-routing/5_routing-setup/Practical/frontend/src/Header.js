import { Link, NavLink } from "react-router-dom"

const Header = () => {

  const logoutHandler = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }


  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Amazon Newton</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/post/1">Post 1</Link>
          <Link to="/post/2">Post 2</Link>
          <Link to="/post/3">Post 3</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>Register</Link>
        </li>
        <li className="nav-item">
          <NavLink
            to="/Login"
            style={({ isActive }) => ({
              color: isActive
                ? "greenyellow"
                : "black",
            })}
          >
            Login
          </NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={logoutHandler} className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
      </form>
    </div>
  </nav>)
}
export default Header;