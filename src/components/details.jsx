import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button'
import {Consumer} from '../context'

class Details extends Component {
    state = {  }

   
    render() {  
        return (
          <Consumer>
              {(value)=>{
                 
                 const { id , company ,img , info ,price , title , inCart}= value.detailProduct
                return(
                    
                    <div className="container py-5">
                    {/* title */}
                    <div className="row">
            <div className="col-10 max-auto text-center text-slanted text-blue my-5"><h1>{title}</h1></div>
                    </div>
                    {/* product info */}
                    <div className="row">
                        {/* product img */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <img src={img} className="img-fluid" alt="product" />
                        </div>
                        {/* product text */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                             <h3> model : {title}</h3>
                             <h4 className="text-title text-uppercase text-muted mt-3 md-2">
                                 made by : <span className="text-uppercase">{company}</span>
                             </h4>
                             <h4 className="text-blue">
                                 <strong>
                                     price : <span className="mx-1">₹</span>{price}
                                 </strong>
                             </h4>
                             <p className="text-capitalize font-weight-bold mt-3 md-0">
                                 info about product :
                             </p>
                             <p className="text-muted lead">{info}</p>
                             <div>
                                 <Link to='/'><ButtonContainer>back to products</ButtonContainer></Link>
            <ButtonContainer cartcolor disabled={inCart ? true:false} onClick={()=>{value.addToCart(id); value.openModel(id)}} >{inCart ? "inCart" : "add to cart"}</ButtonContainer>
                             </div>
                            </div>                       
                    </div>
                </div>
                 ) }}
          </Consumer>
          );
    }
}
 
export default Details;