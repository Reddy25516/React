import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/header.css";
import { useSelector } from "react-redux";


import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import {FiSearch} from "react-icons/fi";
import {FaBars} from "react-icons/fa";

const Header = (props) => {
  const values = useSelector((state) => state);

  let myAccount = values.myAccount;
  let cartCount = values.cart.cartCount;
  let wishCount = values.cart.wishCount;
  let navData = values.navData;

  const [searchData, setSearchData] = useState(values.data);
  const [name, setName] = useState("");

  const { filterAll } = props;

  const hambarClick = () => {
    let navbar = document.querySelector(".nav-bar");
    if (navbar.style.display === "none") {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  };

  let myAccount_name = myAccount.firstName ? myAccount.firstName : "User";

  //  this function below is used to get the search data
  const getDataList = () => {
    let new_post = [];
    if (name !== "") {
      new_post = navData.filter((post) => post.category === name);
    } else {
      new_post = navData;
    }
    let navs = document.querySelector(".active-link");
    if (navs.name !== "home") {
      new_post = new_post.filter((post) => post.category === navs.name);
    }
    setSearchData(new_post);
  };
  
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    let navbar = document.querySelector(".nav-bar");
    let hambar = document.querySelector(".hambar");
    mql.onchange = (e) => {
      if (e.matches) {
          navbar.style.display = "none";
          hambar.style.display = "block";
      } else {
        navbar.style.display="block"
        hambar.style.display="none"
      }
    };
  },[]);

  return (
    <>
      <header>
        <div className="header row align-items-center">

          {/* kraya title */}
          <div className="col-md-2 col-3 ps-0 title">
            <span >
              KRAYA.
            </span>
          </div>

          {/* search bar  */}
          <div className="search col-md-5 d-flex">
            <input
              id="searchinput"
              className="input1 col-12"
              placeholder="search for products brands and more"
              onChange={filterAll}
              onMouseOver={getDataList}
              list="datalistOptions"
            ></input>

            <button className="search-icon" type="submit" onClick={filterAll}>
              <FiSearch />
            </button>

            <datalist id="datalistOptions">
              {Array.from(searchData).map((post) => (
                <option key={post.title}>{post.title}</option>
              ))}
            </datalist>
          </div>

              {/*  cart and wish icons  */}
          <div className="col-md-2 col-4 header-icons ">
            <div className="position-relative me-5">
              <Link to="/wish">
                <AiOutlineHeart className="icon1" />
              </Link>
              <span className="position-absolute top-0 start-100 translate-middle icon2 border border-light">
                {wishCount}
              </span>
            </div>
            <div className="position-relative">
              <Link to="/cart">
                <AiOutlineShoppingCart className="a-cart-shopping icon1" />
              </Link>
              <span className="position-absolute top-0 start-100 translate-middle icon2 border border-light">
                {cartCount}
              </span>
            </div>
          </div>

          {/* sign in button  and the icon */}
          <div className="login justify-content-end col-md-3 col-5 d-flex">
            <Link className="signINbtn" to="/user">
              {myAccount.email ? <p>{myAccount_name}</p> : <p>Sign In</p>}
            </Link>
            <Link to="user">
              <BsPerson className="icon1" />
            </Link>
          </div>
          <div className="hambar col-1" onClick={hambarClick}><FaBars /></div>
        </div>


        {/* header navbar  */}
        <div className="nav-bar">
          <nav
            className="navbar navbar-expand-md navbar-dark bg-dark"
            id="navbar"
          >
            <ul className="nav navbar-nav justify-content-center col-12">
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="home"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="smartphones"
                  to="/phones"
                >
                  Smart Phones
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="laptops"
                  to="laptops"
                >
                  {" "}
                  Laptops{" "}
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="groceries"
                  to="groceries"
                >
                  {" "}
                  Groceries{" "}
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="fragrances"
                  to="fragnaces"
                >
                  {" "}
                  Fragrances{" "}
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="skincare"
                  to="skincare"
                >
                  {" "}
                  Skin Care{" "}
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link nav-link" : "nav-link"
                  }
                  name="home-decoration"
                  to="homedecoration"
                >
                  Home Decoration{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
