import React, { useState, useRef } from "react";
import Filter from "./Filter/Filter";
import Product from "./Product/Product";
import "./Products.css";
const Products = ({ products, filltiration, handleUpdateProducts }) => {
  const [bar, setBar] = useState("");
  const lay = useRef();
  const showBar = () => {
    bar.current.style.left = "0px";
  };

  const ToggleMenu = () => {
    var ele = document.getElementsByClassName("featured");
    var element = Array.from(ele);
    element[0].addEventListener("click", () => {
      element[0].children[1].classList.toggle("show");
    });
  };
  const lowToHigh = () => {
    const sortLow = products.sort((a, b) => a.price - b.price);
    handleUpdateProducts(sortLow);
  };
  const highToLow = () => {
    const sortHigh = products.sort((a, b) => b.price - a.price);
    handleUpdateProducts(sortHigh);
  };
  const ChangeLayout = (e) => {
    let item = document.querySelectorAll(".cards .card");
    let element = Array.from(item);
    element.map((el) => el.classList.add("w-100"));
  };
  const resetLayout = () => {
    let item = document.querySelectorAll(".cards .card");
    let element = Array.from(item);
    element.map((el) => el.classList.remove("w-100"));
  };
  return (
    <div className="products">
      <div className="page">
        <div className="info">
          <h2>
            Shop <span> | </span>
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="align-text-top feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <i className="fa-solid fa-chevron-right chev"></i>
          <a href="" className="route">
            ECommerce
          </a>
          <i className="fa-solid fa-chevron-right chev"></i>
          <a href="#" className="path">
            Shop
          </a>
        </div>
        <div className="setting">
          <button>
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
              className="feather feather-settings"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="numbers">
        <div className="filt" onClick={showBar}>
          <span>Filter</span>
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
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
        <div className="num">
          <div className="result">
            <span>{products.length} results found</span>
          </div>
          <div className="sort">
            <ul className="found">
              <li className="featured" onClick={ToggleMenu}>
                Featured <i className="fa-solid fa-chevron-down"></i>
                <ul className="dropdown-menu">
                  <li>Featured</li>
                  <li onClick={lowToHigh}>Lowest</li>
                  <li onClick={highToLow}>Highest</li>
                </ul>
              </li>
              <li className="">
                <button onClick={resetLayout}>
                  <svg
                    data-v-15eba8c6=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid"
                  >
                    <rect
                      data-v-15eba8c6=""
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                    ></rect>
                    <rect
                      data-v-15eba8c6=""
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                    ></rect>
                    <rect
                      data-v-15eba8c6=""
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                    ></rect>
                    <rect
                      data-v-15eba8c6=""
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                    ></rect>
                  </svg>
                </button>
                <button onClick={ChangeLayout}>
                  <svg
                    data-v-15eba8c6=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-list"
                  >
                    <line
                      data-v-15eba8c6=""
                      x1="8"
                      y1="6"
                      x2="21"
                      y2="6"
                    ></line>
                    <line
                      data-v-15eba8c6=""
                      x1="8"
                      y1="12"
                      x2="21"
                      y2="12"
                    ></line>
                    <line
                      data-v-15eba8c6=""
                      x1="8"
                      y1="18"
                      x2="21"
                      y2="18"
                    ></line>
                    <line
                      data-v-15eba8c6=""
                      x1="3"
                      y1="6"
                      x2="3.01"
                      y2="6"
                    ></line>
                    <line
                      data-v-15eba8c6=""
                      x1="3"
                      y1="12"
                      x2="3.01"
                      y2="12"
                    ></line>
                    <line
                      data-v-15eba8c6=""
                      x1="3"
                      y1="18"
                      x2="3.01"
                      y2="18"
                    ></line>
                  </svg>{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="prod">
        <Filter
          products={products}
          fill={handleUpdateProducts}
          setBar={setBar}
        />
        <Product products={products} fill={handleUpdateProducts} />
      </div>
      <button className="buy-now">Buy Now</button>
    </div>
  );
};
export default Products;
