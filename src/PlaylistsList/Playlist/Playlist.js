import React, { Component } from 'react'
import './Playlist.css'

export default class Playlist extends Component {
    render() {
        return (
            <div className="playlist" style={{background:'red'}}>
                <div className="playlistHover">
                    <div className="triangle"></div>
                    <p>Lancer le blindtest</p>
                </div>
            </div>
        )
    }
}

