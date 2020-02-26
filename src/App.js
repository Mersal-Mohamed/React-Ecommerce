import React from 'react';
import Nav from './components/navbar/Nav';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

//Pages
import Home from './components/home/Home';
import Details from './components/details/Details';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Default from './components/not-found/Default';
import Footer from './components/footer/Footer';

class App extends React.Component {

  render() {

    return (
      <Router>
        <div className='App'>
          <Nav/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>            
            <Route  path="/Details">
              <Details />
            </Route> 
            <Route  path="/contact">
              <Contact />
            </Route>
            <Route  path="/cart">
              <Cart />
            </Route>
            <Route >
              <Default />
            </Route>
          </Switch>   
          <Footer/>
        </div>  
      </Router> 
    );
  }
}

export default App;
