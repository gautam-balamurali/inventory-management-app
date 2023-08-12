/* eslint-disable */

import { useLocation, useNavigate } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveRoute = (pathname) => location.pathname === pathname;

  return (
    <aside className="sidebar">
      <nav className="sidebar-navigation">
        <ul>
          <li
            className={isActiveRoute("/") ? "active" : ""}
            onClick={() => navigate("/")}
          >
            <p className="xls-view">Dashboard</p>
          </li>
          <li
            className={isActiveRoute("/departments") ? "active" : ""}
            onClick={() => navigate("/departments")}
          >
            <p className="xls-view">Departments</p>
          </li>
          <li
            className={isActiveRoute("/products") ? "active" : ""}
            onClick={() => navigate("/products")}
          >
            <p className="xls-view">Products</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
