import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found Page</h1>

      <div>
        <button className="btn">
          <NavLink to="/">Home</NavLink>
        </button>
        <button className="btn" id="btn-not-found">
          <NavLink to="/contact">Reportt Problem</NavLink>
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage
