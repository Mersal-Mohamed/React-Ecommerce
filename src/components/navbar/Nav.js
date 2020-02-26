import React from 'react';
import './Nav.scss';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.svg';
import {NavLink} from 'react-router-dom';

export default function Nav (props) {
     return (
            <div className='nav container'>
                <div className='left'>
                <NavLink to="/" exact >
                    <img src={logo} alt="logo" className='logo'/>
                </NavLink>
                    <ul>
                    <li><NavLink to="/" exact >Home</NavLink> </li>
                    <li><NavLink to="/collection">Collection</NavLink> </li>
                    <li><NavLink to="/contact">Contact</NavLink> </li>
                    </ul>
                </div>
                <div className='right'>
                    <NavLink to='/cart'>
                        <img src={cart} alt="cart"/>
                        <span>Cart</span>
                    </NavLink>
                </div>
            </div>

     )
}