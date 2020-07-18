import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import "../css/Details.css";

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    const { addCart } = this.context;
    return (
      <>
        <div className="breadcrumb">
          <Link to="/product">◄ Back to shop</Link>
        </div>

        {product.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src} alt="" />
            <div className="box">
              <div className="row">
                <h3 textAlign="left">{item.title}</h3>
                <span>£{item.price}</span>
                <p>{item.description}</p>
                <p>{item.content}</p>

                <Link
                  to="/cart"
                  className="cart"
                  onClick={() => addCart(item._id)}
                >
                  {" "}
                  <button>Add to cart </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
