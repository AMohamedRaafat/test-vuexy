import React from "react";
import { NavLink } from "react-router-dom";
const Dash = () => {
  return (
    <>
      <li className="list-item">
        <NavLink to="/dashboard" className="item-content drop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-home big"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="title">
            Dashboards
            <span className="childs">2</span>
          </span>
          {<i className={"fa-solid fa-chevron-right chev"}></i>}
        </NavLink>
        <ul className="dropdown-menu">
          <li className="list-item">
            <NavLink to="/ecommerce" className="item-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-circle small"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className="title">eCommerce</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/analytics" className="item-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-circle small"
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <span className="title">Analytcis</span>
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );
};
export default Dash;
