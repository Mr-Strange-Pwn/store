import React from 'react';
import styled from 'styled-components'
import { Consumer } from '../context'
import { ButtonContainer } from './button'
import {Link} from 'react-router-dom'

const Model = () => {
    return ( 
        <Consumer>
            {(value)=>{
                const {modelOpen , closeModel } = value
                const { img , title , price }= value.modelProduct

 if(!modelOpen){
                    return null;
                }
 else{
   return(
    <ModelContainer>
    <div className="container">
        <div className="row">
            <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                <h1>item added to cart</h1>
                <img src={img} className="img-fluid" alt="product" />
                <h5>{title}</h5>
                <h5 className="text-muted">price: ₹ {price} </h5>
                <Link to='/'>
                    <ButtonContainer onClick={()=> closeModel()}>
                        store
                    </ButtonContainer>
                </Link>
                <Link to='/cart'>
                    <ButtonContainer cartcolor onClick={()=> closeModel()}>
                        go to cart
                    </ButtonContainer>
                </Link>
            </div>
        </div>
    </div>  
    </ModelContainer>
   )
                }
            }}
        </Consumer>
    );
}
 
export default Model;

const ModelContainer =styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#model {
    background:var(--mainWhite);
    border-radius: 2rem;
}
`