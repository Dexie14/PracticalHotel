import React from 'react';
import classes from "./PageLayout.module.css";
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer';

const PageLayout = ({children}) => {
  return (
    <div className={classes.main_cont}>
       <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout