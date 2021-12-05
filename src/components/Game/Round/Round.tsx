import React, { Component } from 'react'
import './Round.css'

export type roundProps = {
    tracksRound : string[],
    handleTracksRound: Function,
    tracks: string[]
    handleScore: Function
}

export type roundState = {
    tracksRound: string[],
    trueTrack: number,
    chooseTeam: any
}

export default class Round extends Component <roundProps, roundState> {
    
    setRandomTracks = () => {
        let tracklistCopy = [...this.props.tracks]
        let tracksRound = [
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0], 
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0],
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0],
            tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0]
        ]
        
        return tracksRound
    }

    
    state = {
        tracksRound: this.setRandomTracks(),
        trueTrack: Math.floor(Math.random()*4),
        chooseTeam: ''
    }

    // generer 4 nouveaux morceaux aléatoires dans le state 
    handleRandomTracks = () => {
        let tracklistCopy = [...this.props.tracks]
        let tracksRandom = {
            tracksRound:[
                tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0], 
                tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0],
                tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0],
                tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1)[0]
            ],
            trueTrack: Math.floor(Math.random()*4)
        }
        this.setState(tracksRandom)
        console.log(this.state)
       
    }


    handleChooseTeam = (team:number) => {
        this.props.handleScore(team)
        let state = {
            tracksRound: this.state.tracksRound,
            trueTrack: this.state.trueTrack,
            chooseTeam: ''
        }
        this.setState(state)
    }

    handleChooseTeamDisplay = () => {
        let state = {
            tracksRound: this.state.tracksRound,
            trueTrack: this.state.trueTrack,
            chooseTeam: <section className='teamChoice'><p>Bonne réponse ! Qui a répondu ?</p><div onClick={() => {this.handleChooseTeam(1)}}>Equipe 1 </div><div onClick={() => {this.handleChooseTeam(2)}}>Equipe 2</div></section>
        }
        this.setState(state)
    }

    handleTrueTrack = (id:number) => {
        if(id===this.state.trueTrack)
        {
            
            this.handleRandomTracks()
            this.handleChooseTeamDisplay()

        }
    }
    
    render() {
        return (
            <div className="buttonsContainer">
                {this.state.chooseTeam}
                <div onClick={() => {this.handleTrueTrack(0)}}>{this.state.tracksRound[0]}</div>
                <div onClick={() => {this.handleTrueTrack(1)}}>{this.state.tracksRound[1]}</div>
                <div onClick={() => {this.handleTrueTrack(2)}}>{this.state.tracksRound[2]}</div>
                <div onClick={() => {this.handleTrueTrack(3)}}>{this.state.tracksRound[3]}</div>
            </div>
        )
    }
}
