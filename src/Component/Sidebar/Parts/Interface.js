import React from "react";
import { NavLink } from "react-router-dom";
export const Interface = () => {
  return (
    <>
      <li className="list-item type">
        <div className="item-content">
          <span className="title">USER INTERFACE</span>
        </div>
      </li>
      <li className="list-item">
        <NavLink to="/typography" className="item-content">
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
            className="feather feather-type big"
          >
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
          <span className="title">Typography</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/colors" className="item-content">
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
            className="feather feather-droplet big"
          >
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
          <span className="title">Colors</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/feathers" className="item-content">
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
            className="feather feather-eye big"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          <span className="title">Feathers</span>
        </NavLink>
      </li>

      <li className="list-item ">
        <NavLink to="/cards" className="item-content drop">
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
            className="feather feather-credit-card big"
          >
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          <span className="title">
            Cards
            <span className="childs card">new</span>
          </span>
          {<i className={"fa-solid fa-chevron-right chev"}></i>}
        </NavLink>
        <ul className="dropdown-menu">
          <li className="list-item">
            <NavLink to="/basic" className="item-content">
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
              <span className="title">Basic</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/advance" className="item-content">
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
              <span className="title">Advance</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/statistics" className="item-content">
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
              <span className="title">Statistics</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/anlaytics" className="item-content">
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
              <span className="title">Anlaytics</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="list-item ">
        <NavLink to="/anlaytics" className="item-content  drop">
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
            className="feather feather-archive big"
          >
            <polyline points="21 8 21 21 3 21 3 8"></polyline>
            <rect x="1" y="3" width="22" height="5"></rect>
            <line x1="10" y1="12" x2="14" y2="12"></line>
          </svg>
          <span className="title">Components</span>
          <i className="fa-solid fa-chevron-right chev"></i>
        </NavLink>
        <ul className="dropdown-menu">
          <li className="list-item">
            <NavLink to="/ecommerce/shop" className="item-content">
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
              <span className="title">Shop</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/details" className="item-content">
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
              <span className="title">Details</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/wishlist" className="item-content">
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
              <span className="title">Wishlist</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/checkout" className="item-content">
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
              <span className="title">Checkout</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="list-item ">
        <NavLink to="/user" className="item-content  drop">
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
            className="feather feather-user big"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
          <span className="title">User</span>
          <i className="fa-solid fa-chevron-right chev"></i>
        </NavLink>
        <ul className="dropdown-menu">
          <li className="list-item">
            <NavLink to="/list" className="item-content">
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
              <span className="title">List</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/user/edit" className="item-content">
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
              <span className="title">Edit</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/user/view" className="item-content">
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
              <span className="title">View</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="list-item">
        <NavLink to="/pages" className="item-content  drop">
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
            className="feather feather-file big"
          >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          <span className="title">Pages</span>
          <i className="fa-solid fa-chevron-right chev"></i>
        </NavLink>
      </li>
    </>
  );
};
export default Interface;
