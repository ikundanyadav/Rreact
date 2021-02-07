import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Component } from 'react';
import Nav from './Service/nav';

class App extends Component{
  render(){
    return(
      
      <div className='container'>
        <h2>MERN-Stack Todo App</h2>
        <p>We succefully implemented Nodemone as well!</p>
        <Router>
          <Nav/>
        </Router>
      </div>
      
    )
  }
}

export default App;
