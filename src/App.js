import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Cart from './components/Cart/Cart'
import Details from './components/Details'
import Deafault from './components/Deafault'
import Modal from './components/Modal'

class App extends React.Component{
  render(){
    return(
     <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} ></Route>
        <Route path="/details" component={Details} ></Route>
        <Route path="/cart" component={Cart} ></Route>
        <Route component={Deafault} ></Route>
      </Switch>
      <Modal />
     </React.Fragment>
    )
  }
}

export default App;
