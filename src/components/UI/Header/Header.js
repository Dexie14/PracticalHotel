import React from "react";
import classes from "./Header.module.css";
import Logo from "../../../assets/Landingpage/PracticalHotel.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.mainHead}>
      <header>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <menu className={classes.menu}>
          <nav className={classes.nav}>
            <Link to="/" className={`${classes.navItems} ${classes.home}`}>
              Home
              <div className={classes.active}></div>
            </Link>
            <Link to="/" className={classes.navItems}>
              About
            </Link>
            <Link to="/" className={classes.navItems}>
              Rooms
            </Link>
            <Link to="/" className={classes.navItems}>
              Contact
            </Link>
          </nav>
          <Link to='/bookings' className={classes.button}>
            <button>Book Now</button>
          </Link>
        </menu>
      </header>
    </div>
  );
};

export default Header;
