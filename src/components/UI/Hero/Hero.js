import React from "react";
import classes from "./Hero.module.css";
import Header from "../Header/Header";
import checkIn from "../../../assets/Landingpage/check_in_calendar.svg"
import dropdown from "../../../assets/Landingpage/dropdown.svg"
import guest from "../../../assets/Landingpage/guest.svg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
        <div className={classes.Hero}>
        <Header />
            <div className={classes.hero_text}>
            <h1>Make yourself at home </h1>
            <h1>in our <span>HOTEL</span></h1>
            <p>
                Enjoy your dream rest with us, we give you the comfort you deserve
                with the touch of royalty. Experience the best service today!!
            </p>
            </div>
        </div>
        <div className={classes.Check}>
            <div  className={classes.CheckIn}>
                <div>
                    <img src={checkIn} alt="checkIn"/>
                </div>
                <div>
                <p>Check-in</p>
                <p>25/Aug <span><img src={dropdown} alt="drop down"/></span></p>
                </div>
            </div>
            <hr></hr>
            <div  className={classes.CheckIn}>
                <div>
                    <img src={checkIn} alt="checkOut"/>
                </div>
                <div>
                <p>Check-Out</p>
                <p>31/Aug <span><img src={dropdown} alt="drop down"/></span></p>
                </div>
            </div>
            <hr></hr>
            <div  className={classes.CheckIn}>
                <div>
                    <img src={guest} alt="checkInBlue"/>
                </div>
                <div>
                <p>Guest</p>
                <p>02<span><img src={dropdown} alt="drop down"/></span></p>
                </div>
            </div>
            <Link to= '/bookings' className={classes.checkInBlue}>
                <p>CHECK OUT</p>
            </Link>
        </div>
        
    </section>
  );
};

export default Hero;
