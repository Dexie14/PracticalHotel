import React from "react";
import image_about from "../../../assets/Landingpage/image_about.svg";
import classes from "./About_Us.module.css";

const AboutUs = () => {
  return (
    <div className={classes.about}>
      <div className={classes.imageAbout}>
        <img src={image_about} alt="image_about" />
      </div>
      <div className={classes.imageText}>
        <h3>ABOUT US</h3>
        <p>
          Practical Hotel is the most preferred hotel in West Africa, and it is
          all about the right mix! Located in the heart of Abuja city, we offer
          our clients a perfect blend of business & leisure amenities with
          dining and recreational options delicately infused in one amazing
          space. 
        </p>
        <p>Our hotels are designed for your comfort and convenience. Your
          security is our primary concern and you will find our customer care
          second to none.
        </p>
        <div className={classes.button}>
            <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
