import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="ft-col-1">
          <h4 className="ft-title">Society Coffee</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Shop</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col-2">
          <h4 className="ft-title">Customer Care</h4>
          <ul>
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="ft-col-3">
            <h4 className="ft-title">
              Sign up to our newsletter to receive the latest news & offers.
            </h4>
            <input
              className="ft-input"
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <input className="subscribe-btn" type="submit" value="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
