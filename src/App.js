
// import './App.css';
import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Test from "./components/Test";
import TextBlock from "./components/TextBlock";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={           /* данные обычно храняться отдельно, в реальных проектах это база данных*/
      orders:[],

      items:[
        {
          id:1,
          title:'Роллы калифорния',
          subtitle:'описание товара: ролл калифорния',
          price: 500,
          categories:'cool',
          img:'californiya.jpg'
        },
        {
          id:2,
          title:'Ролл запеченный',
          subtitle:'описание товара: ролл запеченный',
          price: 700,
          categories:'hot',
          img:'zapechenie.jpg'
        }
      ], 
      test:[
        {
        id:1,
        name:'first'
        },
        {
          id:2,
          name:'second'
        },
    ]
    }
    this.addToOrder = this.addToOrder.bind(this); /*функция addToOrder может работать с состоянием state order*/
  }

  render(){
    return (
      <div className="App">
        <TextBlock/>
       <Header ord={this.state.orders}/>
       <Items items={this.state.items} onAdd={this.addToOrder}/>
       <Test test={this.state.test}/>
      </div>
    );
  }
  addToOrder(item){
    this.setState({orders:[...this.state.orders, item]})
    console.log(this.state.orders)
  }
  
}

export default App;
