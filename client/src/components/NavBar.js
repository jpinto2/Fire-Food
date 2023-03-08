import { Link } from 'react-router-dom';
import NavBarCss from '../styles/NavBar.css'

import Auth from "../utils/auth"

function NavBar() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
    <>
      <nav className="navbar navbar-dark bg-danger bg-gradient">
  <div className="container-fluid ">

    <Link to={'/'}>
      <h1 className="logo ">Fire Foods</h1>
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Fire Foods</h1>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/add-review'className="nav-link">Add Review</Link>
          </li>
          <li className="nav-item">
            <Link to='/profile'className="nav-link">Profile</Link>
          </li>
        {Auth.loggedIn() ? (
            <>
              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to='/signup'className="nav-link" >Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to='/login'className="nav-link" >Login</Link>
              </li>
            </>
          )}
        </ul>

        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
    )
  }

export default NavBar;