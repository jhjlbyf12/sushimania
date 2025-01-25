import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <div>

        <h1 className='container-title'>Каталог</h1>

        <div className='container-main'>
        
          {this.props.items.map(i=>
              // <div>{i.title}</div>,
              <Item add={i} onAdd={this.props.onAdd}/>
          )}
        </div>
      </div>
    )
  }
}

export default Items

