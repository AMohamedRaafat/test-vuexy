import React from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";
export const Profile = ({ search, setSearch }) => {
  const SearchShow = () => {
    setSearch(!search);
    console.log(search);
  };
  return (
    <>
      <ul className="navbarProfile">
        <li className="nav-item">
          <NavLink to="/" className="nav-item-content">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
              alt="en"
              width="22"
              height="14"
            />
            <span>English</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-item-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21px"
              height="21px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </NavLink>
        </li>
        <li className="nav-item" id="searchb">
          <NavLink to="" className="nav-item-content">
            <svg
              onClick={SearchShow}
              data-v-0e8a7f4f=""
              xmlns="http://www.w3.org/2000/svg"
              width="21px"
              height="21px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle data-v-0e8a7f4f="" cx="11" cy="11" r="8"></circle>
              <line
                data-v-0e8a7f4f=""
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
              ></line>
            </svg>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-item-content float-count">
            <svg
              data-v-a58fee00=""
              xmlns="http://www.w3.org/2000/svg"
              width="21px"
              height="21px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-body feather feather-shopping-cart"
            >
              <circle data-v-a58fee00="" cx="9" cy="21" r="1"></circle>
              <circle data-v-a58fee00="" cx="20" cy="21" r="1"></circle>
              <path
                data-v-a58fee00=""
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              ></path>
            </svg>
            <span className="count">5</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-item-content float-count">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21px"
              height="21px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-body feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notfiy-count">6</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-item-content user">
            <div className="profile">
              <span className="name">
                John Doe
                <span className="role">admin</span>
              </span>
            </div>
            <div className="profile-img">
              <img
                className="Profilephoto"
                src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png"
                alt="avatar"
              />
              <span className="online"></span>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Profile;
