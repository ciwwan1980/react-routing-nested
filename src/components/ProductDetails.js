import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class ProductDetails extends Component {
    render() {

        //?????? weher we got the this.props.product

        const {name,slug,price}= this.props.product

        return (
            // ?????? why we put here Slug, whats the different between productDetails and ProductsPage
            
            <NavLink to={`/products/${slug}`} >

            <div>
            <div>
            <span>{name}</span>
            </div>
           <div>
              <span>{slug}</span>
           </div>
         <div>
         <span>{price}</span>
         </div>
            
            </div>
    
         </NavLink>
        )
    }
}
