import React, { Component } from 'react'
import ProductItem from "./ProductItem"; 

export default class Products extends Component {

constructor(props){
    super(props)
      this.state={
        products:[...this.props.data],
        search:""
    }
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


filter=(e)=>{
  
    this.setState({
        search:e.target.value,
    }
        
    )
    console.log(this.state.search)
        const filterArray= [...this.props.data].filter(product=>product.name.slice(0,this.state.search.length).toLowerCase()===(this.state.search).toLowerCase())
        console.log(filterArray)
        this.setState({
            products:filterArray
        })
}

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
                <h2>
                  <span onClick={()=>this.props.history.goBack()}>&#8249;</span>
                  Products </h2>

                  <input type="text" onChange={this.filter}/>
              
                <div className="container">
                <div className="sub-container">
                <h3>Name</h3>
                <h3>shortDecription</h3> 
                <h3>Price</h3>
                </div>

                <div className="container">
            <ProductItem data={this.state.products}/>

       
                </div>

                
                </div>
            
               
            </div>
        )
    }
}


