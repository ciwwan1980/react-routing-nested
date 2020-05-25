import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class ProductItem extends Component {
    render() {


        return (
            <>
   {this.props.data&& this.props.data.map((product,i)=>{
       return (<NavLink to={`/products/${product.slug}`} key={i} >

            <div  className="sub-container">
            <div>
            <span>{product.name}</span>
            </div>
           <div>
              <span>{product.slug}</span>
           </div>
         <div>
         <span>{product.price}</span>
         </div>
            
            </div>
    
         </NavLink>
      )   })}
    
         
      </>  )
       
    }
}
