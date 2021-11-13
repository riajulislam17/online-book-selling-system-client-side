import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.jpeg'
import './Header.css'

const Header = () => {
  const { user, admin, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <img className="img-fluid logo rounded-circle" src={logo} alt="" />
        <p className="navbar-brand fw-bold text-success">NILKHET
          <br />
          <small className="fst-italic">grow your knowledge</small></p>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className="fw-bold mx-2 text-decoration-none" to="/home"><i class="fas fa-home"></i> HOME</Link>
            <Link className="fw-bold mx-2 text-decoration-none" to="/explore"><i class="fab fa-wpexplorer"></i> EXPLORE BOOKS</Link>
            <Link className="fw-bold mx-2 text-decoration-none" to="/dashboard"><i class="fas fa-tachometer-alt"></i> DASHBOARD</Link>
            {admin && <Link className="fw-bold mx-2 text-decoration-none" to="/admin"><i class="fas fa-users-cog"></i> ADMIN</Link>}
          </div>
          <div className="d-flex">
            {
              user?.email ?
                <div>
                  <span className="navbar-text fw-bold text-white bg-success p-2 rounded-pill">
                    <i class="fas fa-user"></i> {user?.displayName}
                  </span>
                  <button onClick={logOut} type="submit" className="btn btn-outline-success text-dark fw-bold mx-1"><i className="fas fa-sign-out-alt"></i> LOG OUT</button>
                </div>
                :
                <Link to="/login"><button type="submit" className="btn btn-outline-success text-dark fw-bold mx-1"><i className="fas fa-sign-in-alt"></i> LOG IN</button></Link>
            }

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;