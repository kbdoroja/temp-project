import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaClipboardList, 
  FaShoppingCart, 
  FaUser 
} from "react-icons/fa";
import navbar_logo from "../assets/navbar_logo.png";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="user-navbar">
      <div className="navbar-container">
        <div className="navbar-main-tabs">
          <Link to="/home" className="navbar-logo">
            <img src={navbar_logo} alt="Company Logo" />
          </Link>
          
          <Link 
            to="/home" 
            className={`nav-tab ${location.pathname === '/home' ? 'active' : ''}`}
          >
            <FaHome className="nav-icon" />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/orders" 
            className={`nav-tab ${location.pathname === '/orders' ? 'active' : ''}`}
          >
            <FaClipboardList className="nav-icon" />
            <span>My Orders</span>
          </Link>
        </div>

        <div className="navbar-secondary-tabs">
          <Link 
            to="/cart" 
            className={`nav-tab ${location.pathname === '/cart' ? 'active' : ''}`}
          >
            <FaShoppingCart className="nav-icon" />
          </Link>
          
          <Link 
            to="/profile" 
            className={`nav-tab ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <FaUser className="nav-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;