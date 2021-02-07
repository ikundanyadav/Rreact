import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';
import Clock from './Components/Clock';
function App() {
  const head = <h1>Hello World!</h1>
  
  return (
    <div className="App">
     {head}
      <Welcome name='Kundan Kumar'/>
    </div>
  );
}
function Tick(){
    return(
    <Clock time={new Date()}/>
    );
}

export {Tick, App};
