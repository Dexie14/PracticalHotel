import React from "react";
import classes from "./Testimony.module.css";
import quote1 from "../../../assets/Landingpage/quote_grey.svg";
import quote2 from "../../../assets/Landingpage/quote_purpl.svg";
import dexie from "../../../assets/Landingpage/dexiejustin.svg";
import gladys from "../../../assets/Landingpage/gladysjoel.svg";
import left from "../../../assets/Landingpage/left.svg";
import right from "../../../assets/Landingpage/right.svg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" , position: "absolute", top: "30%" }}>
         <img   onClick={onClick} src={right} alt="right"/>
      </div>
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" , position: "absolute", top: "30%", left: "-10%"}}>
        <img onClick={onClick}  src={left} alt="left"/> 
      </div>
    
  );
}

export default function CustomArrows () {
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className={classes.testimony}>
        <h3>What our clients say!!</h3>
        <div className={classes.clients}>
          <Slider {...settings} className={classes.words}>
            <div>
              <div className={classes.quote}>
                <img src={quote1} alt="quote" />
              </div>
              <h4>
                I got the best hotel service ever, the environment is beautiful,
                and indeed the staffs are dilligent to work and the rooms are
                perfect for KING like myself
              </h4>
              <div className={classes.quotename}>
                <img src={dexie} alt="quote" />
                <p className={classes.dexie}>Dexie Justin</p>
              </div>
            </div>
            <div>
              <div className={classes.quote}>
                <img src={quote2} alt="quote" />
              </div>
              <h4>
                I got the best hotel service ever, the environment is beautiful,
                and indeed the staffs are dilligent to work and the rooms are
                perfect for QUEENS like myself
              </h4>
              <div className={classes.quotename}>
                <img src={gladys} alt="quote" />
                <p className={classes.Joel}>Gladys Joel</p>
              </div>
            </div>
            <div>
            <div className={classes.quote}>
                <img src={quote2} alt="quote" />
              </div>
              <h4>
                I got the best hotel service ever, the environment is beautiful,
                and indeed the staffs are dilligent to work and the rooms are
                perfect for QUEENS like myself
              </h4>
              <div className={classes.quotename}>
                <img src={gladys} alt="quote" />
                <p className={classes.Joel}>Gladys Joel</p>
              </div>
            </div>
            <div>
            <div className={classes.quote}>
                <img src={quote1} alt="quote" />
              </div>
              <h4>
                I got the best hotel service ever, the environment is beautiful,
                and indeed the staffs are dilligent to work and the rooms are
                perfect for KING like myself
              </h4>
              <div className={classes.quotename}>
                <img src={dexie} alt="quote" />
                <p className={classes.dexie}>Dexie Justin</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }

// const Testimony = () => {
//   return (
//     <div className={classes.testimony}>
//       <h3>What our clients say!!</h3>
//       <div className={classes.clients}>
//         <div className={classes.words}>
//           <div>
//               <div className={classes.quote}>
//                 <img src={quote1} alt="quote" />
//               </div>
//               <h4>
//                 I got the best hotel service ever, the environment is beautiful, and
//                 indeed the staffs are dilligent to work and the rooms are perfect
//                 for KING like myself
//               </h4>
//               <div className={classes.quotename}>
//               <img src={dexie} alt="quote"/>
//               <p className={classes.dexie}>Dexie Justin</p>
//               </div>
//           </div>

//           <div >
//               <div className={classes.quote}>
//                 <img src={quote2} alt="quote" />
//               </div>
//               <h4>
//                 I got the best hotel service ever, the environment is beautiful, and
//                 indeed the staffs are dilligent to work and the rooms are perfect
//                 for QUEENS like myself
//               </h4>
//               <div className={classes.quotename}>
//                 <img src={gladys} alt="quote"/>
//                 <p className={classes.Joel}>Gladys Joel</p>
//               </div>
//           </div>
//           <div className={classes.left} ><img src={left} alt=""/></div>
//           <div className={classes.right}><img src={right} alt=""/></div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Testimony;
