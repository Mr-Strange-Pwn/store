import React from 'react';
import {Link} from 'react-router-dom'

const Default = (props) => {
  const {location}=props
  
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h1>page not found</h1>
              <h4> requested URL <span className="text-danger">{location.pathname}</span> not found </h4>
              <Link to="/"><h4>click here to navigate back to APP</h4></Link>
              <h1 style={{color:"green"}}>or you can wisit me here ..... <a href="https://pawan-tiwari.imfast.io">pawan tiwari</a> </h1>
            </div>
          </div>
        </div>
      
    </div>
      );
}
 
export default Default;