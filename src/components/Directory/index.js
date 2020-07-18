import React from "react";
import ShopCoffee from "./../../assets/great-coffee-bean-Society-Coffee.jpg";
import "./styles.css";
import { Link } from "react-router-dom";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopCoffee})`,
          }}
        >
          <h1 className="about-title">Welcome to Society Coffee</h1>
          <h5>
            Organic, fairtrade, single sourced coffee beans from around the
            world, to your door
          </h5>
          <Link to="/product">
            <button className="primary-btn">Shop Coffee</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
