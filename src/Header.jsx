import { Link } from "react-router-dom";
import axios from "axios";

const handleLogoutClick = (event) => {
  event.preventDefault();
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("jwt");
  window.location.href = "/";
};

export function Header() {
  return (
    <header>
      {/* start bootstrap nav here */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BG Collector
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  All Games
                </Link>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/collection/${localStorage.username}`}>
                      My Games
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/reviews">
                      My Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      My Profile
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogoutClick}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
