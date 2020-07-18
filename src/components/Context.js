import React, { Component } from "react";

//imports all product images accessed within the product array
import India from "./product-images/Coffee-Bags-Flags-India.png";
import Brazil from "./product-images/Coffee-Bags-Flags-Brazil.png";
import Ecuador from "./product-images/Coffee-Bags-Flags-Ecuador.png";
import Peru from "./product-images/Coffee-Bags-Flags-Peru.png";
import Kenya from "./product-images/Coffee-Bags-Flags-Kenya.png";
import Colombia from "./product-images/Coffee-Bags-Flags-Colombia.png";

// -Notes-
// React.createContext creates context enabling values to be shared across the site
// DataProvider provides an array of products accessible by the site
// The products within the array have unique ids and details
// The addCart function adds items to cart using their id.
// A conditional statement renders a message if the item is already in the cart.
// There are functions that decrease and increase the quantity of an item in cart
// DataContext.Provider is passed to the children using a prop

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Taste of India - 200g",
        src: `${India}`,
        description: "• Chocolate • Cedar • Smokey",
        content:
          "Robusta cappuccino, sugar, single origin mazagran redeye milk siphon. Siphon, robusta crema extraction variety con panna whipped. Milk strong cinnamon at froth barista cup siphon. Skinny, bar single shot doppio, black, java, rich sugar bar grounds single origin. Frappuccino, cinnamon mocha as latte grounds caramelization half and half froth cappuccino. Viennese, body, latte roast that breve black. Aromatic medium aftertaste percolator skinny, id cappuccino con panna crema kopi-luwak plunger pot con panna. Carajillo mug to go doppio, sugar, a dark, fair trade as steamed cinnamon macchiato.",
        price: 6.95,
        count: 1,
      },
      {
        _id: "2",
        title: "Taste of Brazil - 200g",
        src: `${Brazil}`,
        description: "• Hazelnut • Cedar • Cherry",
        content:
          "Robusta cappuccino, sugar, single origin mazagran redeye milk siphon. Siphon, robusta crema extraction variety con panna whipped. Milk strong cinnamon at froth barista cup siphon. Skinny, bar single shot doppio, black, java, rich sugar bar grounds single origin. Frappuccino, cinnamon mocha as latte grounds caramelization half and half froth cappuccino. Viennese, body, latte roast that breve black. Aromatic medium aftertaste percolator skinny, id cappuccino con panna crema kopi-luwak plunger pot con panna. Carajillo mug to go doppio, sugar, a dark, fair trade as steamed cinnamon macchiato.",
        price: 7.95,
        count: 1,
      },
      {
        _id: "3",
        title: "Taste of Ecuador - 200g",
        src: `${Ecuador}`,
        description: "• Rich • Fruity • Smoooth",
        content:
          "Robusta cappuccino, sugar, single origin mazagran redeye milk siphon. Siphon, robusta crema extraction variety con panna whipped. Milk strong cinnamon at froth barista cup siphon. Skinny, bar single shot doppio, black, java, rich sugar bar grounds single origin. Frappuccino, cinnamon mocha as latte grounds caramelization half and half froth cappuccino. Viennese, body, latte roast that breve black. Aromatic medium aftertaste percolator skinny, id cappuccino con panna crema kopi-luwak plunger pot con panna. Carajillo mug to go doppio, sugar, a dark, fair trade as steamed cinnamon macchiato.",
        price: 6.95,
        count: 1,
      },
      {
        _id: "4",
        title: "Taste of Peru - 200g",
        src: `${Peru}`,
        description: "• Dry • Full bodied • Smokey",
        content:
          "Robusta cappuccino, sugar, single origin mazagran redeye milk siphon. Siphon, robusta crema extraction variety con panna whipped. Milk strong cinnamon at froth barista cup siphon. Skinny, bar single shot doppio, black, java, rich sugar bar grounds single origin. Frappuccino, cinnamon mocha as latte grounds caramelization half and half froth cappuccino. Viennese, body, latte roast that breve black. Aromatic medium aftertaste percolator skinny, id cappuccino con panna crema kopi-luwak plunger pot con panna. Carajillo mug to go doppio, sugar, a dark, fair trade as steamed cinnamon macchiato.",
        price: 8.95,
        count: 1,
      },
      {
        _id: "5",
        title: "Taste of Kenya - 200g",
        src: `${Kenya}`,
        description: "• Cherry • Acidic • Earthy",
        content:
          "Robusta cappuccino, sugar, single origin mazagran redeye milk siphon. Siphon, robusta crema extraction variety con panna whipped. Milk strong cinnamon at froth barista cup siphon. Skinny, bar single shot doppio, black, java, rich sugar bar grounds single origin. Frappuccino, cinnamon mocha as latte grounds caramelization half and half froth cappuccino. Viennese, body, latte roast that breve black. Aromatic medium aftertaste percolator skinny, id cappuccino con panna crema kopi-luwak plunger pot con panna. Carajillo mug to go doppio, sugar, a dark, fair trade as steamed cinnamon macchiato.",
        price: 7.95,
        count: 1,
      },
      {
        _id: "6",
        title: "Taste of Colombia - 200g",
        src: `${Colombia}`,
        description: "• Rich • Fruity • Smoooth",
        content:
          "Robusta cappuccino, sugar, single origin mazagran redeye milk siphon. Siphon, robusta crema extraction variety con panna whipped. Milk strong cinnamon at froth barista cup siphon. Skinny, bar single shot doppio, black, java, rich sugar bar grounds single origin. Frappuccino, cinnamon mocha as latte grounds caramelization half and half froth cappuccino. Viennese, body, latte roast that breve black. Aromatic medium aftertaste percolator skinny, id cappuccino con panna crema kopi-luwak plunger pot con panna. Carajillo mug to go doppio, sugar, a dark, fair trade as steamed cinnamon macchiato.",
        price: 6.95,
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
