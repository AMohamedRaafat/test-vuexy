import React, { useRef } from "react";
import "./Product.css";
import Data from "./data.json";
const Product = ({ products, fill }) => {
  const isVal = useRef();
  const handleChange = () => {
    console.log(isVal.current.value);
    filterBySearch();
  };
  const filterBySearch = () => {
    if (isVal.current.value) {
      return fill((prevState) => {
        return prevState.filter((el) =>
          el.name.toLowerCase().includes(isVal.current.value)
        );
      });
    } else if ((isVal.current.value = "")) {
      fill(Data.products);
    } else {
      fill(Data.products);
    }
  };
  const renderProducts = products?.slice(0, 9).map((product) => {
    return (
      <div className="card" id={product.id} key={product.id}>
        <div className="card-img">
          <img src={product.img} alt="" />
        </div>
        <div className="rate-price">
          <div className="rate">
            {Array.from(Array(5).keys()).map((index) => {
              index < product.rating ? (
                <i className="fa-solid fa-star"></i>
              ) : (
                <i className="fa-regular fa-star"></i>
              );
            })}
          </div>
          <div className="price">$ {product.price}</div>
        </div>
        <div className="card-details">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-desc">{product.discription}</p>
        </div>
        <div className="fav-buy">
          <button className="wish">
            <svg
              data-v-15eba8c6=""
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-50 feather feather-heart"
            >
              <path
                data-v-15eba8c6=""
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>
            Wishlist
          </button>
          <button className="view">
            <svg
              data-v-15eba8c6=""
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-50 feather feather-shopping-cart"
            >
              <circle data-v-15eba8c6="" cx="9" cy="21" r="1"></circle>
              <circle data-v-15eba8c6="" cx="20" cy="21" r="1"></circle>
              <path
                data-v-15eba8c6=""
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              ></path>
            </svg>
            View in cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="products-content">
      <div className="search">
        <input
          type="search"
          placeholder="Search Product.."
          onChange={handleChange}
          ref={isVal}
        />
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
      </div>
      <div className="cards">{renderProducts}</div>
    </div>
  );
};
export default Product;
