import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FiX, FiMenu } from "react-icons/fi";
import "./header.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector} from "react-redux/es/hooks/useSelector";

import UserMenu from "./UserMenu";

const Header = ({search}) => {
  const [open, setOpen] = useState(false);
const initialCartItem = useSelector((state) => state.addToCart.cartItem.length);
 const userAuth = useSelector(state => state.userLogin.Auth)


  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
 
 
  return (
    <>
      <div className="header">
        <div className="logo-name">
          <>
            <img
              src={require("../../images/eCommarceLogo.png")}
              alt="logo-img"
            />
          </>
          <>
            <h1>smile smart</h1>
          </>
        </div>
        <div className="searchForm">
          <form>
            <input type="text" placeholder="search values..." onChange={(e)=> search(e.target.value)}/>

            <button className="serchButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
        </div>
        <Nav className={open ? "navBar-links active" : "navBar-links"}>
          <>
            <NavLink to={"/"} className="nav-Item" onClick={closeMenu}>
              Home
            </NavLink>
          </>
          <>
            <NavLink to={"/products"} className="nav-Item" onClick={closeMenu}>
              Product
            </NavLink>
          </>
          <>
            <NavLink to={"/employee"} className="nav-Item" onClick={closeMenu}>
              Employee
            </NavLink>
          </>
          <>
            <NavLink to={"/cart"} className="nav-Item" onClick={closeMenu}>
              Cart <h4>{initialCartItem}</h4>
              
            </NavLink>
            
          </>
          <>
          { (userAuth)? <UserMenu/> :
            <NavLink to={"/login"} className="nav-Item" onClick={closeMenu}>
               Login
            </NavLink>
          }
          </>
          <Outlet />
        </Nav>
        <div onClick={handleClick} className="menu">
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </>
  );
};

export default Header;
