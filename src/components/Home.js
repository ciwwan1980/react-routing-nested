import React from 'react';

import { Link } from "react-router-dom";
//the corrected one
export default class Home extends React.Component {

    render() {
      console.log(this.props.data, "here in Home")
      //???? why shall in render we write the first condition, if there is this.props.data, 
      // maybe we shall use spread operator
      const topProducts =this.props.data && this.props.data.sort((a, b) => b.price - a.price).slice(0,4);
      console.log(topProducts)
        return(
         
            <div className="top">
            <div className="main-header">
         
            <h1>Welcome visitor</h1>
            
            <span>
            
            <Link  to="/products">
  
              <div className="productsName">Products</div>
            </Link>
            </span>
               </div>
  
                <div className="outer-div">

                {topProducts && topProducts.map((topProduct, index) => {
              return (

              <Link to={`/products/${topProduct.slug}`}>

                <div className="inner-div">
                  <h3>{topProduct.name}</h3>
                  <span>{topProduct.price}</span>
                </div>
              </Link>
                  )
                })}
                
                </div>
              
            <div>
            
            </div>
              </div>
            
     
        )
    }
}