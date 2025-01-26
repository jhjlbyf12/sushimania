
// import './App.css';
import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Test from "./components/Test";
import TextBlock from "./components/TextBlock";
import Categories from "./components/Categories";

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
        },
        {
          id:3,
          title:'Ролл овощной',
          subtitle:'описание товара: ролл овощной',
          price: 400,
          categories:'cool',
          img:'овощной.jpg'
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
      ],
      categoriesItem:[]

    }
    
    this.categoriesItem = this.state.items
    this.addToOrder = this.addToOrder.bind(this); /*функция addToOrder может работать с состоянием state order*/
    this.onDelete = this.onDelete.bind(this)    
    this.changeCategories =this.changeCategories.bind(this)
  }

  render(){
    return (
      <div className="App">
        <TextBlock/>
       <Header ord={this.state.orders} onDelete={this.onDelete}/>
       <Categories changeCategories={this.changeCategories}/>
       <Items items={this.state.categoriesItem} onAdd={this.addToOrder}/>     <Items items={this.state.items} onAdd={this.addToOrder}/>    ПОДМЕНА items
       <Test test={this.state.test}/>
      </div>
    );
  }
  addToOrder(item){

    let inArray = false

    this.state.orders.forEach(el=>{
      if(el.id === item.id){
        inArray = true
      }
  })

    if(!inArray){
      this.setState({orders:[...this.state.orders, item]})
    // console.log(this.state.orders)
    }
  };

  onDelete(item){
    this.setState({orders:this.state.orders.filter(el=>el.id !== item.id)})

  };

  changeCategories(key){

      if(key==='all'){
        this.setState({categoriesItem:this.state.items})
        return

      }

      this.setState({categoriesItem:this.state.items.filter(el=>el.categories===key)})
    }
      
    }

export default App;
