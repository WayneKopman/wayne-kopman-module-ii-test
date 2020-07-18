import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import noCoffee from "./../../assets/No-Cofee-mug.jpg";

const BasketEmpty = (props) => {
  return (
    <div className="basket">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${noCoffee})`,
          }}
        >
          <Link to="/product">
            <button className="primary-btn">Shop Coffee</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketEmpty;
