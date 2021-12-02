import React, { Component } from 'react';
import Logo from '../img/BlindifyLogo.png';
import './Game.css';

export default class Game extends Component {
    render() {
        return (
            <div>
                <div className='background'>
                <img src={Logo} alt="Blindify Logo"/>
                <div className= "gameBox">
                    <div className = "playlistName">
                        <h2>Nom de la playlists</h2>
                    </div>
                    <div className= "Title">
                        <h2> Quelle est le nom de cette musique?</h2>
                    </div>
                </div> 
                </div>
          
            </div>
        )
    }
}
