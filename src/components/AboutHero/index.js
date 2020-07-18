import React from "react";
import "./styles.css";
import Hero from "./../../assets/About-Hero-Bean-Bush.jpg";

const AboutHero = (props) => {
  return (
    <div className="about-hero">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutHero;
