// import React from "react";
import React, { Component } from "react";
import PlaylistsList from '../PlaylistsList/PlaylistsList';
import './App.css';
import Logo from '../img/BlindifyLogo.png';
import Searchbar from "../Searchbar/Searchbar";



class App extends Component {
// function App() {

  render(){
    return (
      <div className="App">
        <section className="section1">
          <img src={Logo} alt="Blindify Logo"/>
          <h1>Jouez au Blindtest musical avec vos amis !</h1>
          <h2>Jouez maintenant à Blindify et découvrez qui a la meilleure culture musicale</h2>
          <a href="#section2" className="playButton">Jouer maintenant</a>
        </section>
        <section className="section2" id="section2">
          <div className="rectangle rectangle1"></div>
          <div className="rectangle rectangle2"></div>
          <div className="rectangle rectangle3"></div>
          <h2>Cliquez sur une playlist pour commencer le blindtest</h2>
          <input type="text" placeholder="recherchez la catégorie que vous voulez..." className="searchbar"/>
          <p>Playlists</p>
        </section>
        <section className="section3">
          < PlaylistsList/>
        </section>
      </div>
    );
  }
}

export default App;
