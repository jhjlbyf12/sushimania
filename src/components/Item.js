import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <h2>{this.props.add.title}</h2>
        <h2>{this.props.add.subtitle}</h2>
        <h2>{this.props.add.price}</h2>
        <img className='container-img' src={'./images/'+ this.props.add.img}></img>
        <div className='add-to-card' onClick={()=>this.props.onAdd(this.props.add)}>+</div>
      </div>
    )
  }
}

export default Item
