import React from "react";
import Hero from "../../components/UI/Hero/Hero";
import Footer from "../../components/UI/Footer/Footer";
import AboutUs from "../../components/Home/About_Us/About_Us";
import HotelCard from "../../components/Home/HotelCard/HotelCard";
import InTouch from "../../components/Home/InTouch/InTouch";
import CustomArrows from "../../components/Home/Testimony/Testimony";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Hero />
      <div className={classes.sectiontwo}>
        <AboutUs />
        <HotelCard />
        <InTouch />
        <CustomArrows />
      </div>
      <Footer />
    </>
  );
};

export default Home;
