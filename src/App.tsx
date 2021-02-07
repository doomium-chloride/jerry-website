import React from 'react';
import logo from './logo.svg';
import './App.css';
import "animate.css/animate.min.css";
import Main from './Components/Main';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
      <Main/>
    </div>
  );
}

export default App;
