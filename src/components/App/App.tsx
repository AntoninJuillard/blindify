// import React from "react";
import React, { Component } from "react";
import './App.css';
import Homepage from "../Homepage/Homepage";
import Game from "../Game/Game";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



class App extends Component {
//  function App() {


 render(){
    return (
      <div className="App">
        <Router>
          <Routes>
            
            <Route path="/" element={<Homepage/>}/>
            {/* @ts-ignore Homepage cassé quand ajoute un state dans homepage.tsx*/ }
            <Route path="game" element={<Game/>}/>
          </Routes>
        </Router>
      </div>
    );
 }
}

export default App;
