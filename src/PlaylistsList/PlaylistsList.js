import React, { Component } from 'react'
import Playlist from './Playlist/Playlist'
import './PlaylistsList.css'

export default class PlaylistsList extends Component {
    render() {
        return (
            <div className="playlistList">
                <Playlist />   
            </div>
        )
    }
}
