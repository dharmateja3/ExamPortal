import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout, username}) => {
  return (
    <div className='d-flex bg-light justify-content-center sticky-top'>
    <nav className="navbar navbar-expand-lg navbar-light pl-4 fw-bold">
      <Link className="navbar-brand" to="/"><img src="https://w7.pngwing.com/pngs/652/725/png-transparent-graduation-ceremony-square-academic-cap-diploma-graduation-cap-and-diploma-black-academic-hat-illustration-school-clipart-academic-certificate-product-thumbnail.png" alt="Bootstrap" width="30" height="24"/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/assessments">Assessments</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          {isLoggedIn ? (
            <>
            <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
              <li className="nav-item">
                <Link className="nav-link">{username} <i class="fa-solid fa-user"></i></Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={onLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="loginDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Login
                </a>
                <div className="dropdown-menu" aria-labelledby="loginDropdown">
                  <Link className="dropdown-item" to="/login/student">Student</Link>
                  <Link className="dropdown-item" to="/login/institute">Institute</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="registerDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Register
                </a>
                <div className="dropdown-menu" aria-labelledby="registerDropdown">
                  <Link className="dropdown-item" to="/register/student">Student</Link>
                  <Link className="dropdown-item" to="/register/institute">Institute</Link>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
