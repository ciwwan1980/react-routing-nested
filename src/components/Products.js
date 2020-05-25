import React, { Component } from 'react'
import ProductDetails from "./ProductDetails"; 

export default class Products extends Component {

    state={
        products:[...this.props.data]
    }

// in render, can we have only one return 

    render() {
        
     
        return (
            <div class
            
            // here we show only when we prsee on products, we have all information of products
            
            Name="products">
                <main style={{display:"flex", justifyContent:"center", padding:"20px"}}>
                <div className="btn1">Reset</div>
                <div className="btn1" onClick={this.asc}>Sort &#8593; </div>
                <div className="btn1" onClick={this.des}>Sort &#8595;</div>
                </main>

                <div className="container">
                <div className="sub-container">
                <h3>Name</h3>
                <h3>shortDecription</h3>
                <h3>Price</h3>
                </div>

                <div className="container">
            {this.props.data && this.props.data.map((product,i)=> <ProductDetails  key={i} product={product}/>
        
        )}
                </div>

                
                </div>
            
               
            </div>
        )
    }
}


