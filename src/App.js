import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { context } from "./context";
import axios from "axios";

import NavBar from "./components/navbar";
import ProductList from "./components/productList";
import Cart from "./components/cart/cart";
import Details from "./components/details";
import Default from "./components/default";
import Model from "./components/model";
import Authentication from "./components/auth/auth";

function App() {
  const value = useContext(context);
  console.log("val", value);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2000/auth")
  //     .then((res) => {
  //       setAuth(res.data);
  //       console.log("res for auth", res.data);
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        {value.auth ? (
          <div>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route path="/pawan" component={Default} />
          </div>
        ) : (
          <div>
            <Route path="/" component={Authentication} />
          </div>
        )}
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
