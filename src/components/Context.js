import React, { Component } from "react";
import India from "./product-images/Coffee-Bags-Flags-India.png";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Taste of India",
        src: `${India}`,
        description: "Tasty Coffee from India",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        price: 6.95,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Taste of India",
        src: `${India}`,
        description: "Tasty Coffee from India",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        price: 6.95,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Taste of India",
        src:
          "https://t4.ftcdn.net/jpg/02/70/55/43/240_F_270554348_3QjXK53GYUOl7FVZFFuvwzlW7w5qsDwl.jpg",
        description: "Tasty Coffee from India",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        price: 6.95,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Taste of India",
        src:
          "https://t4.ftcdn.net/jpg/02/70/55/43/240_F_270554348_3QjXK53GYUOl7FVZFFuvwzlW7w5qsDwl.jpg",
        description: "Tasty Coffee from India",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        price: 6.95,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Taste of India",
        src:
          "https://t4.ftcdn.net/jpg/02/70/55/43/240_F_270554348_3QjXK53GYUOl7FVZFFuvwzlW7w5qsDwl.jpg",
        description: "Tasty Coffee from India",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        price: 6.95,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Taste of India",
        src:
          "https://t4.ftcdn.net/jpg/02/70/55/43/240_F_270554348_3QjXK53GYUOl7FVZFFuvwzlW7w5qsDwl.jpg",
        description: "Tasty Coffee from India",
        content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        price: 6.95,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      console.log(check);
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("This product is already in your cart!");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to remove this item?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataCart !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;

    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
