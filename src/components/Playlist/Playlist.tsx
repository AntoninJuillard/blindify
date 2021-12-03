import React, { Component } from 'react'
import './Playlist.css'
import { Link } from "react-router-dom";

export type playlistProps = {
    playlists: Array<{
        id: number,
        cover: string
    }>
}

export default class Playlist extends Component<playlistProps> {
    render() {
        
        return(
            <div className="playlistList">{
                this.props.playlists.map((pres) =>
            
                    <div className="playlist" style={{background: pres.cover}} key={pres.id}>
                        {console.log(pres)}
                    
                        {/* mettre un state= avec les infos à transmettre à la page game dans la balise link */}
                        <Link to="game">
                            <div className="playlistHover">               
                                <div className="triangle"></div>
                                <p>Lancer le blindtest</p>                  
                            </div>
                        </Link>
                    </div>
                )
            }</div>

        )
        
    
    }
}


    
