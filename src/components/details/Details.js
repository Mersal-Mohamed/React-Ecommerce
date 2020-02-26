import React, { Component } from "react";
import "./Details.scss";
import { NavLink } from "react-router-dom";
import data from '../../data/store-items.json'

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      item: null,
      id: null,
      color: '',
      count: 1,
      showItem: false,
      anotherItem: null,
      order: []
    };
  }

  showAnotherDetails = (id) => {
    let item = this.state.items[id]
    this.setState({      
      showItem: true,
      anotherItem: this.state.items[id]
    },() => {console.log(this.state.showItem,this.state.anotherItem)})
    item.show = true
  }

  increaseCounter = e => {
    this.setState({
      count: parseInt(e.target.value)
    });
  };

    changeColor = e => {
      this.setState({
        color: e.target.style.background
      });

    };
 
  handleCart = (item) => {
      item.addToCart = true
      item.count = this.state.count

      console.log(item)
 };

 
  render() {

    console.log(this.state.count)
    let items = this.state.items;

    let selectedItem = items.filter(item => {
      let x;
         if (item.show === true){
            x = item        
         }
         return x
    });

    let y = []
    let colors;
    let color;

    if(selectedItem.length > 0){
       y = selectedItem[selectedItem.length-1]
       colors = y.colors
       color = colors[0]
    }
      let x ;
      if(this.state.showItem) {
        x = this.state.anotherItem
      }else {
        x = y
      }
      let item = x;
      let  showItem = item.show,
      style1 = {
        background: colors[0] 
      },
      style2 = {
        background: colors[1]
      },
      style3 = {
        background: colors[2]
      };

    return (
      <div className="container">
     
        {               
          showItem ? (
            
          <div>
            <div className="item">
              <div className="detail-images">
                <div className="small-imgs">
                  <img src={`products/${item.image}`} alt="item" />
                  <img src={`products/${item.image}`} alt="item" />
                  <img src={`products/${item.image}`} alt="item" />
                </div>
                <div className="main-img">
                  <div className="grey"></div>
                  <img src={`products/${item.image}`} alt="item"  />
                </div>
              </div>
              <div className="details-text">
                <h2>{item.price}</h2>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <div className="color">
                  <span style={{ textTransform: "capitalize" }}>
                    Color: {this.state.color ? this.state.color : color  }
                  </span>
                  <span
                    className="color1"
                    style={style1}
                    onClick={this.changeColor}
                  ></span>
                  <span
                    className="color2"
                    style={style2}
                    onClick={this.changeColor}
                  ></span>
                  <span
                    className="color3"
                    style={style3}
                    onClick={this.changeColor}
                  ></span>
                </div>
                <div className="addToCart">
                  <input
                    type="number"
                    value={this.state.count}
                    onChange={this.increaseCounter}
                  />
                  <button onClick={(e) => this.handleCart(item,this.state.count,e)}> ADD TO CART</button>
                </div>
              </div>
            </div>
            <h3>Might also like</h3>

            <div className="similar-products">
                <div className="product">
                  <NavLink to="/details">
                    <img
                      src={`products/${items[0].image}`}
                      alt="product"
                      onClick={() =>
                        this.showAnotherDetails(0)
                      }
                    />
                  </NavLink>
                  <div className="product-description">
                    <span>{items[0].name}</span>
                    <span>{items[0].price}</span>
                  </div>
                </div>  
                <div className="product">
                  <NavLink to="/details">
                    <img
                      src={`products/${items[1].image}`}
                      alt="product"
                      onClick={() =>
                        this.showAnotherDetails(1)
                      }
                    />
                  </NavLink>
                  <div className="product-description">
                    <span>{items[1].name}</span>
                    <span>{items[1].price}</span>
                  </div>
                </div>            
                <div className="product">
                  <NavLink to="/details">
                    <img
                      src={`products/${items[2].image}`}
                      alt="product"
                      onClick={() =>
                        this.showAnotherDetails(2)
                      }
                    />
                  </NavLink>
                  <div className="product-description">
                    <span>{items[2].name}</span>
                    <span>{items[2].price}</span>
                  </div>
                </div>
            </div>
            <div className="more">
            <button >
                    MORE PRODUCTS
            </button>
            </div>
         
          </div>
        ) : null}
      </div>
    );
  }
}



export default Details;
