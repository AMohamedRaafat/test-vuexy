import React from "react";
import { NavLink } from "react-router-dom";
const Apps = () => {
  return (
    <>
      <li className="list-item type">
        <div className="item-content">
          <span className="title">APPS & PAGES</span>
        </div>
      </li>
      <li className="list-item">
        <NavLink to="/email" className="item-content">
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
            className="feather feather-mail big"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span className="title">Email</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/chat" className="item-content">
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
            className="feather feather-message-square big"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="title">Chat</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/todo" className="item-content">
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
            className="feather feather-check-square big"
          >
            <polyline points="9 11 12 14 22 4"></polyline>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
          <span className="title">Todo</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/calendar" className="item-content">
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
            className="feather feather-calendar big"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span className="title">Calendar</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/invoice" className="item-content drop">
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
            className="feather feather-file-text big"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span className="title">Invoice</span>
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
            <NavLink to="/preview" className="item-content">
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
              <span className="title">Preview</span>
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/edit" className="item-content">
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
            <NavLink to="/add" className="item-content">
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
              <span className="title">Add</span>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="list-item">
        <NavLink to="/" className="item-content drop">
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
            className="feather feather-shopping-cart big"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="title">eCommerce</span>
          <i className="fa-solid fa-chevron-right chev"></i>
        </NavLink>
        <ul className="dropdown-menu show">
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
      <li className="list-item">
        <NavLink to="/user" className="item-content drop">
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
        <NavLink to="/pages" className="item-content drop">
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
export default Apps;
