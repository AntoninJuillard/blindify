import React, { Component } from 'react';
import Logo from '../img/BlindifyLogo.png';
import './Game.css';

export default class Game extends Component {
    render() {
        return (
            <div>
                <img src={Logo} alt="Blindify Logo"/>
                <div className='background'>    
                    <div className= "gameContainer">
                    <div className = "playlistName">
                        <h2>Nom de la playlists</h2>
                    </div>
                    <div className= "question">
                        <h2> Quelle est le nom de cette musique?</h2>
                    </div>
                    </div> 
                </div>
          
            </div>
        )
    }
}
