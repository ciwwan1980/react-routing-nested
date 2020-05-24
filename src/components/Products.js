import React, { Component } from 'react'
import ProductDetails from "./ProductDetails"; 
import "./products.css"



export default class Products extends Component {

    state={
        products:[...this.props.data]
    }


    render() {
        
        const allProducts= this.props.data&&this.props.data.map((product,i)=>{
            return(
                <ProductDetails  key={i} product={product}/>
            )
        })
        return (
            <div class
            
            // here we show only when we prsee on products, we have all information of products
            
            
            Name="products">
                <main style={{display:"flex", justifyContent:"center", padding:"20px"}}>
                <div className="btn1">Reset</div>
                <div className="btn1" onClick={this.asc}>Sort &#8593; </div>
                <div className="btn1" onClick={this.des}>Sort &#8595;</div>
                </main>

                <table>
                <thead>
                <tr>
                <th>Name</th>
                 <th>shortDecription</th>
                  <th>Price</th>
                </tr>
                </thead> 
                
                <tbody>
                {allProducts}
                </tbody>
                </table>
               
               
               
            </div>
        )
    }
}
