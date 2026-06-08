import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-wrapper">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Anime<span>verse</span>
        </NavLink>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/anime" onClick={closeMenu}>
            Anime
          </NavLink>
          <NavLink to="/watchlist" onClick={closeMenu}>
            Watchlist
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/profile" onClick={closeMenu}>
            Profile
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
