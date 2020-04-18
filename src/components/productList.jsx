import React, { Component } from 'react';
import Product from './product'
import Title from './title'
import { Consumer } from '../index'


class ProductList extends Component {
    render() { 
        return ( 
 <React.Fragment>
    <div className="py-5" >
        <div className="container">
            <Title name="our" title="products" />
            <div className="row">
                <Consumer>
                    {(value)=>{
                        console.log(value)
                        return ( value.map((product , index)=><Product key={index} product={product} />) )
                        
                    }}
                </Consumer>
            </div>
        </div>
    </div>
</React.Fragment>
        );
    }
}
 
export default ProductList;