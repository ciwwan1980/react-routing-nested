import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch } from "react-router-dom"
import './App.css';
import Home from "./components/Home"; 
import Products from "./components/Products"; 
import ProductPage from "./components/ProductPage"; 

class App extends React.Component {
constructor(){
  super()
  this.state={
    Data:[]
}
console.log("reading state first")
}

//in console.log(i have two times date fetch?????????)
componentDidMount(){
this.fetchData()
// console.log("componentDidMount")
}

fetchData=async()=>{
    let response= await fetch("http://localhost:3001/product")
    let data= await response.json()
    console.log(data, "data")
    this.setState({
        Data:data
    })

}
  render() {

    console.log("render")
    return (
      <Router>

        <div className="App">


          <Switch>

      <Route exact path="/" render={(props)=><Home {...props} data={this.state.Data}/>} />
      <Route exact path="/products" render={(props)=><Products {...props} data={this.state.Data}/>} />
      <Route  exact path="/products/:slug" render={(props)=><ProductPage {...props} data={this.state.Data}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

