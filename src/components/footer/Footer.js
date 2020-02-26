import React, { Component } from 'react';
import './Footer.scss';

//imagess
import mailingImage from '../../img/mailing-list-img.png';
import arrow from '../../img/arrow.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className='container footer'>
                <div className="footer-image">
                    <img src={mailingImage} alt="mail" className='mail-img'/>
                    <div className="inputField">
                        <p>Sign up for our newsletter and get<br/> 10% your next order</p>
                        <input type="email"/>
                        <img src={arrow} alt='arrow' className='arrow'/>
                    </div>
                </div>
                <div className='footer-nav'>
                    <ul>
                        <li><a href='/'>About</a></li>
                        <li><a href='/care'>Customer Care</a></li>
                        <li><a href='/instagram'>Instagram</a></li>
                    </ul>
                    <p>&copy; Pretend Store</p>
                </div>
                
            </div>
        )
    }
}
