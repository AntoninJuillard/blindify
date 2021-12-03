import React, { Component } from 'react'
import './Playlist.css'
import { Link } from "react-router-dom";

export type playlistProps = {
    playlists: Array<{
        id: number,
        cover: string,
        name: string
    }>
}

export default class Playlist extends Component <playlistProps> {
    render() {
        
        return(
            <div className="playlistList">{
                this.props.playlists.map((pres) =>
            
                    <div className="playlist" style={{background: pres.cover}} key={pres.id}>
                        {console.log(pres)}
                        <Link to="game">
                            <div className="playlistHover">               
                                <div className="triangle"></div>
                                <p>Lancer le blindtest</p>                  
                            </div>
                        </Link>
                        {/* onclick sur cette playlist composant Game s'affiche sur toute la window avec les props de la playlist */}
                    </div>
                )
            }</div>
        )
          
    }
}


    
