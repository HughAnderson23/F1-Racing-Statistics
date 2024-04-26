import React from "react";
import "../../styles/banner.css";
import f1car from "/src/img/f1background_image.png";
import f1logo from "/src/img/f1_f1logo.png";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${f1car})` }}>
       <div className="inner">
        <div className="single-hero-banner__content">
          <img className="single-hero-banner__logo" src={f1logo} alt="f1car" style={{ width: "250px", height: "150px" }} />
        </div>
      </div>
    </div>
  );
};

export default Banner;