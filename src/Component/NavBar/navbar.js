import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/user.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar" style={ {backgroundColor : "#42314a"}}> 
      <img src={logo} alt="logo" className="logo" style={{ borderRadius: "50px" }} />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="table"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Editing
        </Link>

        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="Profile"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>

          <Link
            activeClass="active"
            to="table"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Editing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
