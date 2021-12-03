import React, { Component } from 'react';
import './Game.css';
import icon from '../../img/BlindifyLogo.png'

export default class Game extends Component {
    render() {
        return (
            <div>
                <img src={icon} alt="Blindify Logo"/>
                <div className='background'>    
                    <div className= "gameContainer">
                        <div className = "playlistName">
                            <h2 className ="namePlaylist">Nom de la playlists</h2>
                        </div>
                        <div className= "question">
                            <h2 className="questionFont"> Quelle est le nom de cette musique?</h2>
                        </div>
                        <div className= "numberQuestion">
                            <h2 className="fontNumber">1/15</h2>
                        </div>     
                    <div className = "equipeContainer">
                        <div className = "equipe1" >
                                <h3 className ="fontEquipe">Equipe 1</h3>
                                <h4>1</h4>
                        </div>
                        <div className = "responseContainer fontName">
                                <div className = "response1" >
                                  <p>Artiste et Titre1</p>
                                </div>
                                <div className = "response2" >
                                  <p>Artiste et Titre2</p>
                                </div>
                                <div className = "response3" >
                                  <p>Artiste et Titre3</p>
                                </div>
                                <div className = "response4" >
                                  <p>Artiste et Titre4</p>
                                </div>
                        </div>
                            <div className = "equipe2" >
                                <h3 className="fontEquipe">Equipe 2</h3>
                                <h4>1</h4>
                            </div> 
                    </div>   
                </div> 
                </div>
            </div>
        )
    }
}
