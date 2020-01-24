import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import {Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import News from './components/pages/News'
import Details from './components/pages/Details'
import NotFound from './components/pages/NotFoundPage'
import Contact from './components/pages/Contact us'
export default class App extends Component {
  render() {
    return (
     
      <div>
        <NavBar/>
        <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/news" component={News}/>
      <Route  path="/contacts" component={Contact}/>
      <Route  path="/details" component={Details}/>
      <Route   component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
     
    )
  }
}
