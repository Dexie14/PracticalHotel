import React from "react";
import classes from "./HotelCard.module.css";
import RoomItem from "../RoomItem/RoomItem";
import { cardarray } from "../../../constants/index";

const HotelCard = () => {
  return (
    <div className={classes.hotel}>
      <h3>OUR HOTEL ROOMS</h3>
      <h5>
        ALL OUR ROOMS COME COMPLETE WITH COMPLIMENTARY BREAKFAST AND WI-FI.
        CHECK-IN FROM 2:00 PM, CHECK-OUT UNTIL 12:00 PM.
      </h5>
      <div className={classes.cardarray}>
        {cardarray.map((item) => (
          <RoomItem
            key={item.id}
            img={item.img}
            suite={item.suites}
            price={item.price}
            bed={item.bed}
            css={item.css}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
