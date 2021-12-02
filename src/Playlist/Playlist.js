import React, { Component } from 'react'
import './Playlist.css'
import { Link } from "react-router-dom";

export default class Playlist extends Component {
    render() {
        // return (
        //     <div className="playlist" style={{background:this.props.cover}}>
        //         <div className="playlistHover">
        //             <div className="triangle"></div>
        //             <p>Lancer le blindtest</p>
        //         </div>
        //     </div>
        // )
        return this.props.playlists.map((pres) =>
        
            <div className="playlist" style={{background:pres.cover}} key={pres.id}>
                {/* mettre un state= avec les infos à transmettre à la page game dans la balise link */}
                <Link to="game">
                    <div className="playlistHover">               
                        <div className="triangle"></div>
                        <p>Lancer le blindtest</p>                  
                    </div>
                </Link>
            </div>
        )
    }
}
