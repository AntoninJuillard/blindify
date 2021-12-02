import React, { Component } from 'react'
import './Playlist.css'

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
            <div className="playlist" style={{background:pres.cover}}>
                <div className="playlistHover">
                    <div className="triangle"></div>
                    <p>Lancer le blindtest</p>
                </div>
            </div>
        )
    }
}
