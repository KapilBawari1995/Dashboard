
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { Icons } from '../utility/Icon';

const menuItems = [
  { name: "Dashboard", link: "/dashboard", icon: Icons.Dashboard },
  { name: "Motions/Trials", link: "/motions", icon: Icons.Motions },
  { name: "Invoices", link: "/invoices", icon: Icons.Invoices },
  { name: "Reports", link: "/reports", icon: Icons.Reports },
  { name: "Calendar", link: "/calendar", icon: Icons.Calendar },
  { name: "Data", link: "/data", icon: Icons.Data },
  { name: "EUO", link: "/euo", icon: Icons.EUO },
  { name: "Tasks", link: "/tasks", icon: Icons.Tasks },
  { name: "Templates", link: "/templates", icon: Icons.Templates },
  { name: "Security", link: "/security", icon: Icons.Security },
  { name: "Features/Functions", link: "/features", icon: Icons.Features },
  { name: "Settlements", link: "/settlements", icon: Icons.Settlements }
];

const settingsMenu = [
  { name: "Settings", link: "/settings", icon: Icons.Settings }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="col-md-2 bg-white sidebar vh-100 mt-5">
      <div className='postion_fixd'>
        <ul className="nav flex-column gap-2 mt-2">
          {menuItems.map((item, index) => (
            <li
              className={`nav-item ${location.pathname === item.link ? 'active-item' : ''}`}
              key={index}
            >
              <Link className="nav-link fw-normal d-flex align-items-center px-3" to={item.link}>
                <span className="me-2">{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="nav flex-column">
          {settingsMenu.map((item, index) => (
            <li
              className={`nav-item ${location.pathname === item.link ? 'active-item' : ''}`}
              key={index}
            >
              <Link className="nav-link fw-normal d-flex align-items-center px-3 p-3 border-top border-gray" to={item.link}>
                <span className="me-2">{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
