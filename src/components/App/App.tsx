// import React from "react";
import React, { Component } from "react";
import './App.css';
import Homepage from "../Homepage/Homepage";
import Game from "../Game/Game";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
    return (
      <div className="App">
        
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
        </Router>
      </div>
    );
 }
//}

export default App;
