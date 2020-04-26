import React from 'react';
import {Link} from 'react-router-dom'
import PaypalExpressBtn from './paypal'

const CartTotal = ({value , history}) => {
    const {cartSubTotal , cartText , cartTotal , clearCart}= value
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase md-3 px-5" text="button" onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal:</span><strong>₹ </strong>{cartSubTotal}
                    </h5>
                    <h5>
                        <span className="text-title">
                            text:</span><strong>₹ </strong>{cartText}
                    </h5>
                    <h5>
                        <span className="text-title">
                            total:</span><strong>₹ </strong>{cartTotal}
                    </h5>
                    <PaypalExpressBtn 
                    total={cartTotal} 
                    clearCart={clearCart}
                    history={history}
                    />
                </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default CartTotal;