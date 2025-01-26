import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[

                {
                    key:'all',
                    name:'Все'
                },
                {
                    key:'cool',
                    name:'Холодные'
                },
                {
                    key:'hot',
                    name:'Горячие'
                }                    

            ]
        }
    }


  render() {
    return (
      <div className='categories'>
        {
            this.state.categories.map(el=>(
                <div onClick={()=>this.props.changeCategories(el.key)}>{el.name}</div>
            ))
        }
        
        

      </div>
    )
  }
}

export default Categories
