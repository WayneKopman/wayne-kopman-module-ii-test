import React from "react";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import Colombia from "./../product-images/Coffee-Bags-Flags-Colombia.png";

import Directory from "./../Directory";

const Homepage = (props) => {
  return (
    <section className="homepage">
      <Directory />
      <div className="about">
        <section class="container content-section">
          <h2 class="section-header">Coffee of the month</h2>
          <div class="about-us-page">
            <div class="about-us-main">
              <img class="about-us-image" src={Colombia} alt="about-us" />
              <p class="about-us-text">
                Robusta cappuccino, sugar, single origin mazagran redeye milk
                siphon. Siphon, robusta crema extraction variety con panna
                whipped. Milk strong cinnamon at froth barista cup siphon.
                Skinny, bar single shot doppio, black, java, rich sugar bar
                grounds single origin. Frappuccino, cinnamon mocha as latte
                grounds caramelization half and half froth cappuccino. Viennese,
                body, latte roast that breve black. Aromatic medium aftertaste
                percolator skinny, id cappuccino con panna crema kopi-luwak
                plunger pot con panna. Carajillo mug to go doppio, sugar, a
                dark, fair trade as steamed cinnamon macchiato.
              </p>
              <a href="shop.html">
                <Link to="/product">
                  <button class="btn btn-primary btn-purchase">Shop Now</button>
                </Link>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Homepage;
