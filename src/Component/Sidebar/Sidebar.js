import React, { useState, useEffect, useRef } from "react";
import Dash from "./Parts/Dash";
import Apps from "./Parts/Apps";
import Interface from "./Parts/Interface";

import "./Sidebar.css";
const SideBar = ({ ele, setEle }) => {
  const [menu, setMenu] = useState(false);
  const ShowMenu = () => {
    setMenu(!menu);
  };
  const isShow = useRef();
  useEffect(() => {
    setEle(isShow);
  });
  // Code For Open Drop Down Menu
  useEffect(() => {
    let btns = document.getElementsByClassName("drop");
    let arr = Array.from(btns);
    // eslint-disable-next-line array-callback-return
    arr.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btn.parentNode.childNodes[1].classList.toggle("show");
      });
    });
  }, []);
  // End
  const closeBar = () => [(isShow.current.style.left = "-260px")];
  return (
    <>
      <nav className="sidebar" ref={isShow}>
        <div className="logo">
          <span>
            <img
              src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
              alt="logo"
            />
            <h2>Vuexy</h2>
          </span>
          <p onClick={ShowMenu} className="barlarge">
            {menu ? <span></span> : ""}
          </p>
          <p className="small" onClick={closeBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </p>
        </div>
        <div className="list-group">
          <ul className="list">
            <Dash />
            <Apps />
            <Interface />
          </ul>
        </div>
      </nav>
    </>
  );
};
export default SideBar;
