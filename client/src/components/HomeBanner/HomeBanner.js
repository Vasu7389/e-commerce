import React from "react";
import "./HomeBanner.css";
import mobileImage from "../../utils/mobile.svg";

export const HomeBanner = () => {
  return (
    <div className="homeBanner__container">
      <div className="homeBanner__textContainer">
        <div className="homeBanner__header">Galaxy S9</div>
        <div className="homeBanner__description">from $689</div>
        <button type="button" className="homeBanner__button">
          More
        </button>
      </div>
      <div className="homeBanner__circleContainer">
        <div className="homeBanner__circleInner">
          <div className="homeBanner__circleObject">
            <img src={mobileImage} alt="Loading" width="500px" height="350px" />
          </div>
        </div>
      </div>
    </div>
  );
};
