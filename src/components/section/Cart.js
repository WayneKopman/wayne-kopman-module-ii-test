import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import BasketEmpty from "./../BasketEmpty/index";

import "../css/Cart.css";

// ** Notes **
// The Cart Component gets its context from context.js
// componentDidMount gets the cart total from context
// A conditional statement renders div if cart is empty
// The map function get products from the product array
// There are onClick events that reduce and increase quantity using by their id
// An onClick event removes and increases quantity using their id
// The Math.round function rounds the total to 2 decimal places

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return (
        <div className="basket">
          <h2 style={{ textAlign: "center" }}>Your Basket is Empty</h2>

          <BasketEmpty />
        </div>
      );
    } else {
      return (
        <>
          <div className="breadcrumb">
            <Link to="/product">◄ Back to shop</Link>
          </div>
          {cart.map((item) => (
            <div className="details" key={item._id}>
              <img className="cart-img" src={item.src} alt="Coffee-Bag" />
              <div className="box">
                <div className="row">
                  <h3>{item.title}</h3>
                  <span>
                    £{Math.round(item.price * item.count * 100) / 100}
                  </span>

                  <div className="amount">
                    <button
                      className="count"
                      onClick={() => reduction(item._id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="count"
                      onClick={() => increase(item._id)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <div
                    className="delete"
                    onClick={() => removeProduct(item._id)}
                  >
                    Remove item
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="/payment">Check out</Link>
            <h3>Total: £{Math.round(total * 100) / 100}</h3>
          </div>
        </>
      );
    }
  }
}

export default Cart;
