import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch ,Route} from 'react-router-dom'


import NavBar from './components/navbar'
import ProductList from './components/productList'
import Cart from './components/cart/cart'
import Details from './components/details'
import Default from './components/default'
import Model from './components/model'
import RegisterForm from './components/register'


function App() {
  return (
   <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="/pawan" component={Default} />
        <Route path="/register" component={RegisterForm} />
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
