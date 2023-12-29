import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./CSS/AdminPanel.css";


const userInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(userInfo);
const AdminPanel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } 

      if (userInfo.isAdmin) {
        navigate("/admin");
      }

      if(!userInfo.isAdmin){
        navigate("/jklk");
      }
    
  }, []);

  return (
    <>
      <div className="admin-container">``
        <div className="admin-panel">
          <div>
            <ul className="links">
              <li>
                <NavLink to="/admin">Home</NavLink>
              </li>
              <li>
                <NavLink to="services">Services</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
