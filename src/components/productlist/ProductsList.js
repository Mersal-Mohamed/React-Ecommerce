import React from 'react';
import "./Products.scss"
import Product from '../product/Product'
import data from '../../data/store-items.json';

export default class ProductsList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            products: data,
            item: null
        }
    }
 

    handleDetails = (id) => {
        let products = this.state.products
        let item = this.state.item 
        item = products[id]
        item.show = true
        this.setState({ 
            item: item
        })

     };
    
    render() {
        let products =this.state.products
        return(
            <div className='products container' >

                {
                       products.map((product) => {
                        return(
                            <div key={product.id}>
                                <Product product={product} showItem= {this.handleDetails} item={this.state.item}/>                       
                            </div>
                        )
                    })
                                            
                        
                }
               
                
                <button>
                    MORE PRODUCTS
                </button>
            </div>
        );

    }
}






