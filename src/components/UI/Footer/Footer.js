import React from 'react'
import classes from "./Footer.module.css";
import Logo from "../../../assets/Landingpage/PracticalHotel.png";
import facebook from "../../../assets/Landingpage/facebook.svg";
import twitter from "../../../assets/Landingpage/twitter.svg";
import insta from "../../../assets/Landingpage/insta.svg";

const Footer = () => {
  return (
    <footer> 
        <div className={classes.Footer}>
        <div className={classes.foot}>
          <div className={classes.footerlogo}>
            <img src={Logo} alt="Logo" />
          </div>
          <h4>Our hotels are designed for your comfort and convenience.</h4>
            <div className={classes.footimage}>
                <img src={insta} alt="insta" />
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <p>About</p>
            <p>Reviews</p>
            <p>Deal</p>
            <p>Help</p>
          </div>

          <div>
            <h3>Resources</h3>
            <p>Our Work</p>
            <p>Services</p>
            <p>FAQ</p>
          </div>

        </div>
        <hr></hr>
    </footer>
  )
}

export default Footer