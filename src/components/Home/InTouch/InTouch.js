import React from "react";
import classes from "./InTouch.module.css";

const InTouch = () => {
  return (
    <div className={classes.intouch}>
      <h3>STAY IN TOUCH</h3>
      <p>Join our Emails, first to know about special offers and more</p>
      <form>
        <input type="text" placeholder="user@email.com"/>
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default InTouch;
