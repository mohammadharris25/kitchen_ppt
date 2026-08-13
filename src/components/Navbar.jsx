import React from "react";
import "./Navbar.css";

const Navbar = ({
  cartCount = 0,
  onCartClick,
  onLogoClick,
  onAccountClick,
}) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#shop">Shop</a>
        <a href="#bestsellers">Bestsellers</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
      </div>

      <div
        className="nav-logo"
        onClick={onLogoClick}
        style={{ cursor: "pointer" }}
      >
        Home<span className="logo-italic">dine</span>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <button
          className="icon-btn"
          onClick={onCartClick}
          aria-label="Open cart"
        >
          {/* Simple bag icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
        <button
          className="icon-btn"
          onClick={onAccountClick}
          aria-label="Account"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
