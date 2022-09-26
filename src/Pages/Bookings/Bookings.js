import React from "react";
import arrow from "../../assets/Landingpage/back_arrow.svg";
import classes from "./Bookings.module.css";
import dropdown from "../../assets/Landingpage/dropdown.svg";
import checkIn from "../../assets/Landingpage/check_in_calendar.svg";
import booking from "../../assets/Landingpage/booking_image.svg";
import guest from "../../assets/Landingpage/guest.svg"
import { Link, Outlet } from "react-router-dom";

const Bookings = () => {
  return (
    <div className={classes.Bookings}>
      <Link to = "/" className={classes.arrow}>
        <img src={arrow} alt="arrow" />
      </Link>
      <h3>BOOKINGS</h3>
      <Outlet />
      <div>
        <form className={classes.form}>
          <div className={classes.first}>
            <div className={classes.space} >
                  <div className={classes.Check}>
                    <div className={classes.CheckIn}>
                      <div>
                        <img src={checkIn} alt="checkIn" />
                      </div>
                      <div>
                        <p>Check-in</p>
                        <p>
                          25/Aug{" "}
                          <span>
                            <img src={dropdown} alt="drop down" />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={classes.CheckIn}>
                      <div>
                        <img src={checkIn} alt="checkIn" />
                      </div>
                      <div>
                        <p>Check-Out</p>
                        <p>
                          31/Aug{" "}
                          <span>
                            <img src={dropdown} alt="drop down" />
                          </span>
                        </p>
                      </div>
                    </div>
                    <p>1 Night(s)</p>
                  </div>
                  <hr></hr>
                  <div className={classes.roomselect}>
                  <div className={classes.guest}>
                      <div>
                        <img src={guest} alt="guest" />
                      </div>
                      <div>
                        <p>Guest</p>
                        <p>
                          02
                          <span>
                            <img src={dropdown} alt="drop down" />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className={classes.type}>
                          <h5>Room Type</h5>
                          <select className={classes.selected}>
                              <option disabled selected hidden>
                                Select Room type
                              </option>
                                <option>Deluxe</option>
                                <option>King Suites</option>
                                <option>Family Suites</option>
                                <option>Presidential Suites</option>
                                </select>
                    </div>
                  </div>
                  <h3>GUESTS DETAILS</h3>
                  <p>Enter guest name as stated in the ID/passport that will be used to check-in.</p>
                  <h5> 1.   Adults</h5>
                  <div className={classes.nameInput}>
                        <div>
                          <h6>Full Name</h6>
                          <input type="text" placeholder ="e.g Mark Henry"/>
                        </div>
                        <div>
                          <h6>Gender</h6>
                          <select className={classes.selected}>
                          <option disabled selected hidden>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                          </select>
                        </div>
                  </div>
                  <div className={classes.nameInput}>
                        <div>
                          <h6>Email</h6>
                          <input type="email" placeholder ="e.g markhenry@gmail.com" required/>
                        </div>
                        <div>
                          <h6>Phone Number</h6>
                          <input type="number" placeholder ="08164541342"/>
                        </div>
                  </div>
                  </div>
          </div>
          <div className={classes.second}> <img src ={booking} alt =""/></div>
          <Link to = "/payment">
          <button className={classes.reserve}>CONTINUE TO RESERVATION</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Bookings;


 