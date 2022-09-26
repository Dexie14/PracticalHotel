import React from "react";
import classes from "./Header.module.css";
import Logo from "../../../assets/Landingpage/PracticalHotel.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.mainHead}>
      <header>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <menu className={classes.menu}>
          <nav className={classes.nav}>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/bookings" 
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              Rooms
            </NavLink>
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? `${classes.active}` : `${classes.navItems}`
              }
            >
              Contact
            </NavLink>
          </nav>
          <Link to="/bookings" className={classes.button}>
            <button>Book Now</button>
          </Link>
        </menu>
      </header>
    </div>
  );
};

export default Header;
