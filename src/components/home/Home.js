import React from 'react';
import './Home.scss';
import hero from '../../img/hero.png'
import ProductsList from '../productlist/ProductsList'

export default function Home (props) {
     return (
         <div className='home container'>
            <div className='header'>
                <div className='header-img'>
                        <img src={hero} alt='t-shirt'/>
                    
                </div> 
               
                <div className='header-text'>
                    <h1>Lorem ipsum <br/>dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                         elit. Ullamcorper ultrices magna mauris pellentesque <br/>
                         dignissim ante varius diam elit
                    </p>
                    <button>
                        OUR PRODUCTS 
                    </button>
                </div>
            </div>
            <ProductsList />
         </div>
     )
}