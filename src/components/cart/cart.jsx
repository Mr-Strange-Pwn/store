import React, { Component } from 'react';
import Title from '../title';
import CartColumn from './cartColumn'
import EmptyCart from './emptyCart'
import {Consumer} from '../../context'
import CartList from './cartList';
import CartTotal from './cartTotal'

class Cart extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
           
<Consumer>
{value =>{
 const { cart } = value
 if(cart.length === 0){
     return(
         <EmptyCart />
     )
 }
 else{
 return(
     <React.Fragment>
          <Title name="your" title="cart" />
          <CartColumn />
          <CartList value={value} />
          <CartTotal value={value} history={this.props.history} />
     </React.Fragment>
       
 )    
 }

}}
</Consumer>
            
           
        </React.Fragment> );
    }
}
 
export default Cart;