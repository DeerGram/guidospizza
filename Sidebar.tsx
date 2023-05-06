import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/orders" activeClassName="active">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeClassName="active">Analytics</NavLink>
        </li>
        <li>
          <NavLink to="/toppings" activeClassName="active">Toppings</NavLink>
        </li>
        <li>
          <NavLink to="/customer" activeClassName="active">Customer Interface</NavLink>
        </li>
        <li>
          <NavLink to="/pie-artist" activeClassName="active">Pie Artist Analytics</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
