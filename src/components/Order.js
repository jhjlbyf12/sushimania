import React, { Component } from 'react'
import { FaTrashCan } from "react-icons/fa6";

export class Order extends Component {
    constructor(props){
        super(props)
        this.state={

          counter:1
        }
    }
  render() {
    return (
      
        <div className='item'>
            <h2>{this.props.item.title}</h2>
            <h2>{this.props.item.subtitle}</h2>
            <h2>{this.props.item.price}</h2>
            <p>{this.state.counter}</p>

            <div>
                <FaTrashCan onClick={()=>this.props.onDelete(this.props.item)} /> 
                
                <div>

                  <button onClick={()=>this.setState({counter:this.state.counter+1})}>+</button>
                  <button onClick={()=>this.setState({counter:this.state.counter-1})}>-</button>
                             
                </div>
                
               
              </div>
        </div>
      
    )
  }
}

export default Order
