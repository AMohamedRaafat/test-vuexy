import React from "react";
import "./Bar.css";
export const SearchBar = () => {
  return (
    <div className="search-bar">
      <svg
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
        <line data-v-0e8a7f4f="" x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input type="search" placeholder="Explore Vuexy.." />
    </div>
  );
};
export default SearchBar;
