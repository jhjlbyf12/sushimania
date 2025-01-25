import React, { Component } from 'react'

export class Test extends Component {
  render() {
    return (
      <div>
        {this.props.test.map(i=>
        <div>{i.name}</div>
            
        )}
      </div>
    )
  }
}

export default Test
