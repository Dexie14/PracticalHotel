import React from "react";
import arrow from "../../assets/Landingpage/back_arrow.svg";
import classes from "./Payment.module.css";
import { Link } from "react-router-dom";
import payment from "../../assets/Landingpage/payment_image.svg";
import minicalendar from "../../assets/Landingpage/minicalendar.svg";
import user from "../../assets/Landingpage/user.svg";
import visa from "../../assets/Landingpage/visa.svg";
import flutterwave from "../../assets/Landingpage/flutterwave.svg";
import mastercard from "../../assets/Landingpage/mastercard.svg";

const Payment = () => {
  return (
    <div className={classes.payment}>
      <Link to="/bookings" className={classes.arrow}>
        <img src={arrow} alt="arrow" />
      </Link>
      <h3>PAYMENTS</h3>
      <div>
        <form className={classes.form}>
          <div className={classes.first}>
            <div className={classes.space}>
              <h3>Your Reservations</h3>
              <div className={classes.price}>
                <h4>Deluxe Room - 1 Room</h4>
                <h4>#50,000</h4>
              </div>
              <div className={classes.adult}>
                <span>
                  {" "}
                  <img src={minicalendar} alt="night" /> 1 Night
                </span>
                <span>
                  {" "}
                  <img src={user} alt="Adult" /> 1 Adult
                </span>
              </div>
              <div className={classes.price}>
                <h4>Total</h4>
                <h4>#50,000</h4>
              </div>
              <hr></hr>
              <h3>PAYMENT METHOD</h3>
              <div className={classes.pay}>
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={flutterwave} alt="flutterwave" />
              </div>
              <div className={classes.nameInput}>
                <div>
                  <h6>Card Number </h6>
                  <input
                    type="number"
                    placeholder="123456789056"
                    required
                  />
                </div>
              </div>
              <div className={classes.dateInput}>
                <div>
                  <h6>Expiration Date</h6>
                  <input
                    type="number"
                    placeholder="23/08"
                    required
                  />
                </div>
                <div>
                  <h6>CVV</h6>
                  <input type="number" placeholder="888"  maxLength={3}/>
                </div>
              </div>
              <div className={classes.nameInput}>
                <div>
                  <h6>Name on Card</h6>
                  <input
                    type="text"
                    placeholder="e.g markhenry@gmail.com"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.second}>
            {" "}
            <img src={payment} alt="" />
          </div>
          <Link to="/order">
            <button className={classes.reserve}> PROCEED TO PAY </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Payment;
