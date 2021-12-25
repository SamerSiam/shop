import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import NotFound from './Components/NotFound/NotFound';
import HomePage from './Components/HomePage/HomePage'
import Products from './Components/Products/Products'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'

 class App extends Component {


  render() {
    return (
      <div className="ui container">
         <BrowserRouter>
            <Header/>
                <Switch>
                <Route exact path="/"  component={HomePage} />
                <Route exact path="/products"   component={Products}/>
                <Route exact path="/products/:id" component={ProductDetails} />
                <Route exact path="/cart" component={Cart} />
                <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
      </div>
    )
  }
}


export default App;
