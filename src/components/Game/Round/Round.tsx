import React, { Component } from 'react'
import './Round.css'

export type roundProps = {
    tracksRound : string[],
    handleTracksRound: Function,
    tracks: string[]
}

export type roundState = {
    tracksRound: string[],
}

export default class Round extends Component <roundProps> {
    
    handleRandomTracks = () => {
        let tracklistCopy = [...this.props.tracks]
        let tracksRound = [
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1), 
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1),
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1),
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)
        ]
        console.log(this.props.tracks)
        return tracksRound
    }

    state = {
        tracksRound: this.handleRandomTracks()
    }

    
    
    render() {
        return (
            <div className="buttonsContainer">
                <div>{this.state.tracksRound[0]}</div>
                <div>{this.state.tracksRound[1]}</div>
                <div>{this.state.tracksRound[2]}</div>
                <div>{this.state.tracksRound[3]}</div>
            </div>
        )
    }
}
