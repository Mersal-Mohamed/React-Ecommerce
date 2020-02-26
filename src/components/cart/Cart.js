import React, { Component } from "react";
import "./Cart.scss";
import CartItem from "./CartItem";
import data from '../../data/store-items.json'

export default class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCart: false,
      count: 1,
      orders: [],
      data: data,
      total: null
    }
  }

  componentDidMount = () => {
   let  orders = []
   for(let i = 0;i < data.length; i++){
      if(data[i].addToCart === true){
        orders.push(data[i])
      }
   }
   if(orders.length > 0){
     this.setState({
       showCart: true
     })
   }
    this.setState({
      orders
    })
  }



  render() {
    let total = [],
        totalPrice =  [],
        showCart = this.state.showCart,
        orders = this.state.orders,
        sum,
        allPrice;

    for(let i = 0; i< orders.length;i++){
      total.push(orders[i].count)
      totalPrice.push(parseInt(orders[i].price))
    }

    if(total.length > 0) {
         sum = total.reduce((a,b) => a+b)
         allPrice = totalPrice.reduce((a,b) => a+b)
    }
    console.log(allPrice)
    return (
      <div className="cart container">
        <h3>Your Cart</h3>
         
        {showCart ? (
            orders.map(item => {
              return   (
                <CartItem item={item}  key={item.id} />
                )
            })
      
        ) : (
          <div>
            <hr />
            <h3>Your cart is empty</h3>
          </div>
        )}
        {
            showCart? 
            ( 
            <div className='all-items'>
                <span>All items</span>
                <span>
                {sum < 10 ? 0 : ""}
                    {sum}
                    </span>
                <span>${allPrice}</span>
                <button>CHECK OUT ALL</button>
            </div>
            ) : ''
        }

      </div>
    );
  }
}


