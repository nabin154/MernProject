import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './CSS/AdminPanel.css'
const AdminPanel = () => {
  return (
    <>
      <div className="admin-container">
        <div className="admin-panel">
          <div >
            <ul className='links'>
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
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminPanel
