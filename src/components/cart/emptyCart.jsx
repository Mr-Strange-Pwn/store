import React from 'react';
import {ButtonContainer} from '../button'
import {Link} from 'react-router-dom'

const EmptyCart = () => {
    return ( 
        <div className="container mt-5">
            <div className="row">
            <div className="col-10 mx-auto text-center text-title">
            <h1>your cart is empyty now ..!</h1>
            <Link to='/'>
                <ButtonContainer>start shopping</ButtonContainer>
            </Link>
            </div>
            </div>
        </div>
     );
}
 
export default EmptyCart;