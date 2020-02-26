import React, { Component } from "react";

export default class cartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: []
    };
  }



  render() {
    const { item } = this.props;
    
    return (
      <div>
        <hr />
        <div className="sold-item">
          <div className="item-details">
            <div className="cart-img">
              <img src={`products/${item.image}`} alt="item" />
              <p>{item.name}</p>
            </div>
            <span>
              {item.count < 10 ? 0 : ""}
              {item.count}
            </span>
            <span>${parseInt(item.price) * item.count}</span>
            <button>CHECK OUT</button>
          </div>
        </div>
      </div>
    );
  }
}
