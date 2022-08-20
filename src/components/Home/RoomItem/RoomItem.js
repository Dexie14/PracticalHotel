import React from 'react'
import classes from "./RoomItem.module.css";
import { Link } from "react-router-dom";

const RoomItem = ({img, suite, price, bed,css}) => {
  return (
    <div className={classes.room}>
        <div className={classes.suites}>
            <img src={img} alt="img"/>
        </div>
        <main className={classes[css]}>
        <div className={classes.suitesText}>
            <div className={classes.name}>
            <p>{suite}</p>
            <p>{price}</p>
            </div>
            <div className={classes.book}>
            <p>{bed}</p>
            <Link to= '/bookings'>
            <button>Book Now</button>
            </Link>
            </div>
        </div>
        </main>
    </div>
  );
};

export default RoomItem;