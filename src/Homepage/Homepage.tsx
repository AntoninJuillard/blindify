import React, { Component } from "react";
import './Homepage.css';
import Logo from '../img/BlindifyLogo.png';
import Searchbar from "../Searchbar/Searchbar";
import Playlist from "../Playlist/Playlist";
import Game from "../Game/Game";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
    state = {
        playlists : [
          {
            id: 1,
            cover: '#000000'
          },
          {
            id: 2,
            cover: '#F00000'
          },
          {
            id: 3,
            cover: '#FF0000'
          },
          {
            id: 4,
            cover: '#FFF000'
          }
          
        ]
      }
    render() {
        return (
            <div className="Homepage">
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
                    {/* @ts-ignore */}
                    <Playlist playlists={this.state.playlists}/>
                </section>
            </div>
        )
    }
}
