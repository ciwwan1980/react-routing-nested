import React, { Component } from 'react'

export default class Products extends Component {

    // state={
    //     products:[...this.props.data]
    // }

    render() {
   
        return (
            <div>
                {this.props.data&&this.props.data.map((item)=>{
                    console.log(item, "here-----item")
                    return (
                        <div>
                        {item.name}
                        </div>
                    )
                })}
            </div>
        )
    }
}
