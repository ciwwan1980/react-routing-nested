import React, { Component } from 'react'
import ProductItem from "./ProductItem"; 

export default class Products extends Component {


    state={
        products:[...this.props.data]
    }

    asc=()=>{

        console.log(this.state.products)
    let ascData=this.props.data.sort((a,b)=>{
        if (a.price>b.price){
            return -1
        }else{
            return 1
        }
    
    })
    console.log(ascData)
    this.setState({
        products:ascData, 
    })
}

    des=()=>{

        console.log(this.state.products)
    let desData=this.props.data.sort((a,b)=>{
        if (a.price>b.price){
            return 1
        }else{
            return -1
        }
    
    })
 
    this.setState({
        products:desData, 
    })
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
            <ProductItem data={this.props.data}/>

       
                </div>

                
                </div>
            
               
            </div>
        )
    }
}


