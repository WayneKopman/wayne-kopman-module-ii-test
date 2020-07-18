import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Products.css";

// Context is imported from Context.js
import { DataContext } from "../Context";

// The map function finds products and their details by ids in the product array
// An onClick event uses addCart to add a product to the cart by their id
// More info button uses RouteParams to open the product details component

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products } = this.context;
    return (
      <div id="product">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            <div className="content">
              <h4>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h4>
              <span>£{product.price}</span>
              <p>{product.description}</p>
              <button onClick={() => this.context.addCart(product._id)}>
                Add to cart
              </button>
              <Link to={`/product/${product._id}`}>
                <button className="info-btn">More info</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
