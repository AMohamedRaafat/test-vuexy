import React, { useState } from "react";
import Navlist from "./Navlist/Navlist";
import Profile from "./NavbarProfile/Profile";
import "./Navbar.css";
import SearchBar from "./NavbarProfile/SearchBar/SearchBar";
import { click } from "@testing-library/user-event/dist/click";
const Navbar = ({ ele }) => {
  const [search, setSearch] = useState(false);

  return (
    <div className="navbar">
      {search ? (
        <SearchBar />
      ) : (
        <>
          <div className="navbar-btn">
            <Navlist ele={ele} />
          </div>
          <div className="navbar-profile">
            <Profile search={search} setSearch={setSearch} />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Navbar;
