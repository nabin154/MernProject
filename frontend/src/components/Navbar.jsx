import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useUser } from "../Context/UserContext";

const Navbar = () => {
  const {userInfo, setUserInfo} = useUser();
  const navigate = useNavigate();


  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    navigate("/login");
  };


  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">TechHub</NavLink>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {!userInfo ? (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            ) : (
              <li>
                <span id="logout-button" onClick={logoutHandler}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
