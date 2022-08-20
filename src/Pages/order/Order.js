import React from 'react';
import arrow from "../../assets/Landingpage/back_arrow.svg";
import checked_icon from "../../assets/Landingpage/checked_icon.svg";
import classes from "./Order.module.css";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className={classes.order}>
      <Link to="/payment" className={classes.arrow}>
        <img src={arrow} alt="arrow" />
      </Link>
      <div className={classes.payed}>
        <h4>Your Payment has been received </h4>
        <img src={checked_icon} alt="check" />
        <p>Thank you booking with us !</p>
        <p>Your Reference ID is: 12376420922</p>
        <p>You will receive an order confirmation email with the details of your order.</p>
        <Link to = "/">
        <button className={classes.backhome} >BACK TO HOME</button>
        </Link>
      </div>
    </div>
  )
}

export default Order