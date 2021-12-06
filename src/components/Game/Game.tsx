import React, { Component } from 'react'
import './Game.css';
import icon from '../../img/BlindifyLogo.png'
import Round from './Round/Round';

export type playlistProps = {
    playlist: {
        id: number, 
        name: string,
        tracks: {artist:string, trackname:string}[]
    }
}

export type gameState = {
    tracks : string[],
    tracksRound : string[],
    score1 : number, 
    score2 : number
}



export default class Game extends Component <playlistProps, gameState>{
    

    // turn props tracklist into string artist - name 
    handleTracks = () => {
        let rawTrackList = this.props.playlist.tracks
        let trackList:string[] = []
        for(let i=0; i < rawTrackList.length; i++){
            trackList[i] = rawTrackList[i].artist + ' - ' + rawTrackList[i].trackname
        }
        return trackList      
    }

    state = {
        tracks: this.handleTracks(),
        tracksRound: [this.props.playlist.tracks[0].artist + ' - ' + this.props.playlist.tracks[0].trackname, this.props.playlist.tracks[1].artist + ' - ' + this.props.playlist.tracks[1].trackname, this.props.playlist.tracks[2].artist + ' - ' + this.props.playlist.tracks[2].trackname, this.props.playlist.tracks[3].artist + ' - ' + this.props.playlist.tracks[3].trackname],
        score1: 0,
        score2: 0
    }

    // assign the score 
    handleScore = (team:number) => {
        if(team=== 1){
            let i= this.state.score1

            let state = {
                tracks: this.state.tracks,
                tracksRound: this.state.tracksRound,
                score1: i + 1,
                score2: this.state.score2          
            }
            this.setState(state)
        } else if(team=== 2){
            let i= this.state.score2

            let state = {
                tracks: this.state.tracks,
                tracksRound: this.state.tracksRound,
                score1: this.state.score1,
                score2: i + 1        
            }
            this.setState(state)
        }        
    }

    // delete the track sent
    handleDeleteTrack = (track:string) => {
        let tracks = this.state.tracks
        for(let i=0; i < tracks.length; i++){
            if(tracks[i]===track){
                tracks.splice(i)
            }
        }
        let state = {
            tracks: tracks,
            tracksRound: this.state.tracksRound,
            score1: this.state.score1,
            score2: this.state.score2       
        }
        this.setState(state)
    }
    // define the round's tracks
    handleTracksRound = (track1:string, track2:string, track3:string, track4:string) => {
        let state = {
            tracks: this.state.tracks,
            tracksRound: [track1, track2, track3, track4],
            score1: this.state.score1,
            score2: this.state.score2  
        }
        this.setState(state)
    }

    

    render() {
        return (
            <div className='container'>       
                <img src={icon} alt="Blindify Logo"/>
                <div className="gameContainer">
                    <div className='scoreDisplay'>
                        <p className="scoreDisplayTitle">Equipe 1</p>                      
                        <p>{this.state.score1} </p>
                    </div>
                    <h2 className="playlistName">{this.props.playlist.name}</h2>
                    <div className="title" onClick={() => this.handleTracks()}>Quel est le nom de cette musique ?</div>
                    <Round  tracks={this.state.tracks} tracksRound={this.state.tracksRound} handleTracksRound={this.handleTracksRound} handleScore={this.handleScore}/>
                    <div className='scoreDisplay scoreDisplayRight'>
                        <p className="scoreDisplayTitle">Equipe 2</p>  
                        <p>{this.state.score2}</p>
                    </div>       
                </div>                       
            </div>
        )
    }
}
