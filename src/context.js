import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import axios from "axios";

export const context = React.createContext();

const Provider = context.Provider;
export const Consumer = context.Consumer;

class ProductProvider extends Component {
  state = {
    users: [{ username: "pawan", password: "pawanpawan" }],
    auth: false,
    products: [],
    detailProduct: [],
    cart: [],
    modelOpen: false,
    modelProduct: detailProduct,
    cartSubTotal: 0,
    cartText: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    this.setState({ products: tempProduct });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handelDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  openModel = (id) => {
    const product = this.getItem(id);
    this.setState({ modelProduct: product, modelOpen: true });
  };

  closeModel = () => {
    this.setState({ modelOpen: false });
  };

  incremant = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count += 1;
    product.total = product.count * product.price;

    this.setState({ cart: [...tempCart] }, () => this.addTotal());
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count -= 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState({ cart: [...tempCart] }, () => this.addTotal());
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      {
        cart: [...tempCart],
        products: [...tempProducts],
      },
      () => this.addTotal()
    );
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotal();
    });
  };

  addTotal = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    this.setState({ cartSubTotal: subtotal, cartText: tax, cartTotal: total });
  };

  addUsers = (data) => {
    this.setState({ users: [...this.state.users, data] });
  };

  checkAuth = (data) => {
    let un = data.username;
    let pw = data.password;
    this.state.users.forEach((user) => {
      if (user.username === un) {
        if (user.password === pw) {
          this.setState({ auth: true });
          alert(`Welcome ${user.username}`);
        } else {
          alert("password not match");
        }
      } else {
        alert("credentials not match");
      }
    });
  };

  render() {
    return (
      <Provider
        value={{
          auth: this.state.auth,
          products: this.state.products,
          addToCart: this.addToCart,
          handelDetail: this.handelDetail,
          detailProduct: this.state.detailProduct,
          openModel: this.openModel,
          closeModel: this.closeModel,
          modelOpen: this.state.modelOpen,
          modelProduct: this.state.modelProduct,
          increment: this.incremant,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          cart: this.state.cart,
          cartSubTotal: this.state.cartSubTotal,
          cartText: this.state.cartText,
          cartTotal: this.state.cartTotal,
          checkAuth: this.checkAuth,
          addUsers: this.addUsers,
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export default ProductProvider;
