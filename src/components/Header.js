// import React from 'react'
// import React, { useState } from "react";
import React, {/*useEffect, */useState } from "react";  
import { SlBasket } from "react-icons/sl";
import Order from "./Order";

function Header(props) { 

    let[cartOpen, setCartOpen]=useState(false)         /*хуки-жизненого цикла компонент, следит за компонентом в сию секунду*/

   return (
    <header>
        <div>
            <span className='logo'> Суши Мания</span>
            
                <ul className='nav'>
                    <li className='nav-item'>Доставка любой еды </li>   
                    <li className='nav-item'>Симфероль</li>  
                    <li className='nav-item'>8 800 800 88 88</li>  
                </ul>       
                <SlBasket onClick={()=>setCartOpen(cartOpen=!cartOpen)} className='shop-cart-button' />           {/* компонент корзинки из библиотеки*/}
                {cartOpen&&(<div className='shop-cart'>
                    {props.ord.map(or=>( 
                        <Order item={or} key={or.id} onDelete={props.onDelete}/> 
                    ))}

                </div>)}    {/* если cartOpen true тогда*/}
        </div>
       

        <div className='presentation'>

        </div>
    </header>
    )
  
}   

export default Header
