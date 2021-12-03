import React, { Component } from "react";
import './Homepage.css';
import Searchbar from "../Searchbar/Searchbar";
import Playlist from "../Playlist/Playlist";
import icon from '../../img/BlindifyLogo.png'

export type PlaylistsState = {
  playlist:
    {
      id: number,
      cover: string,
      name: string
    }[]
}


export default class Homepage extends React.Component<{}, PlaylistsState>{
    state = {
      playlist: [
        {
          id: 1,
          cover: 'black',
          name: 'playlist1'
        },
        {
          id: 2,
          cover: 'red',
          name: 'playlist2'
        },
        {
          id: 3,
          cover: 'blue',
          name: 'playlist3'
        },
        {
          id: 4,
          cover: 'pink',
          name: 'playlist4'
        },
        {
          id: 5,
          cover: 'purple',
          name: 'playlist5'
        }
      ] 
    }
    render() {
        return (
            <div className="Homepage">
                <section className="section1">
                    <img src={ icon } alt="Blindify Logo"/>
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
                  
                    
                    <Playlist playlists={this.state.playlist}/>
                </section>
            </div>
        )
    }
}
