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
                                <h4 className ="fontScore">1</h4>
                        </div>
                        <div className = "reponseContainer">
                                <div className = "reponse1" >
                                  <p className ="fontName">Artiste et Titre1</p>
                                </div>
                                <div className = "reponse2" >
                                  <p className ="fontName">Artiste et Titre2</p>
                                </div>
                                <div className = "reponse2" >
                                  <p className ="fontName">Artiste et Titre3</p>
                                </div>
                                <div className = "reponse4" >
                                  <p className ="fontName">Artiste et Titre4</p>
                                </div>
                        </div>
                            <div className = "equipe2" >
                                <h3 className="fontEquipe">Equipe 2</h3>
                                <h4 className ="fontScore">1</h4>
                            </div> 
                    </div>   
                </div> 
                </div>
          
            </div>
        )
    }
}
