import React, { Component } from 'react';
import './Game.css';
import icon from '../../img/BlindifyLogo.png'

export type playlistProps = {
    playlist: {
        id: number, 
        name: string,
        tracks: {artist:string, trackname:string}[]
    }
}

export default class Game extends Component <playlistProps>{


    createTourTrackList = (trackList:{artist:string, trackname:string}[]) => {
        const tracklistCopy = [...trackList]

        let tourTracks = [
            { 
                track: tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1), 
                value:false
            },
            {
                track: tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1), 
                value:false
            },
            {
                track: tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1), 
                value:false
            },
            {
                track: tracklistCopy.splice(Math.floor(Math.random()*tracklistCopy.length),1), 
                value:false
            }
        ]    
        let trueTrack = tourTracks[Math.floor(Math.random()*tourTracks.length)]
        trueTrack.value = true
        
        return { trueTrack:trueTrack, tourTracks:tourTracks}
        
    }

    isRightSong = (value:boolean) => {
        if( value == true){
            console.log('bonne rep') 
            return 'style={{background: `green`}}'         
        } else {
            console.log('maaauvaise rep')
            return 'style={{background: `red`}}'   
        }
    }
    
    copyTrackList = (tracklistToCopy: {artist:string, trackname:string}[]) => {
        // faire une copie de la tracklist dans les props
        let trackList = [...tracklistToCopy]
        // créer une liste de 4 tracks avec un element booleen en plus dont 1 TRUE
        let tourTracklist = this.createTourTrackList(trackList)

        // pour avoir l'artiste de la chanson en true = tourTracklist.trueTrack.track[0].artist pour track .trackname à la fin

        // pour avoir l'artiste de toutes les chansons de la tracklist du tour : tourTracklist.tourTracks[0].track[0].artist

        // si la track a la value true et que elle est presente dans le tableau trackList alors la supprimer du tableau tracklist
        if(trackList.includes(tourTracklist.trueTrack.track[0])){
            for (let i = 0; i < trackList.length; i++) {
                if(trackList[i].artist === tourTracklist.trueTrack.track[0].artist && trackList[i].trackname === tourTracklist.trueTrack.track[0].trackname){
                    delete trackList[i]
                }
            }
           
        }
        // tourTracklist.tourTracks[0].track[0].artist + ' - ' + tourTracklist.tourTracks[0].track[0].trackname
        
        return <div className = "responseContainer fontName">
            <div className = "response1" onClick={ () => this.isRightSong(tourTracklist.tourTracks[0].value)} >
                <p>{tourTracklist.tourTracks[0].track[0].artist + ' - ' + tourTracklist.tourTracks[0].track[0].trackname}</p>
            </div>
            <div className = "response2" onClick={ () => this.isRightSong(tourTracklist.tourTracks[1].value)}>
                <p>{tourTracklist.tourTracks[1].track[0].artist + ' - ' + tourTracklist.tourTracks[1].track[0].trackname}</p>
            </div>
            <div className = "response3" onClick={ () => this.isRightSong(tourTracklist.tourTracks[2].value)}>
                <p>{tourTracklist.tourTracks[2].track[0].artist + ' - ' + tourTracklist.tourTracks[2].track[0].trackname}</p>              
            </div>
            <div className = "response4" onClick={ () => this.isRightSong(tourTracklist.tourTracks[3].value)}>
                <p>{tourTracklist.tourTracks[3].track[0].artist + ' - ' + tourTracklist.tourTracks[3].track[0].trackname}</p>
            </div>
           
        </div>
               
    }




   

    render() {
        
        return (
            
            <div>
                
                <img src={icon} alt="Blindify Logo"/>
                <div className='background'>    
                    <div className= "gameContainer">
                        <div className = "playlistName">
                            <h2 className ="namePlaylist">{this.props.playlist.name}</h2>
                        </div>
                        <div className= "question">
                            <h2 className="questionFont">Quel est le nom de cette musique ?</h2>
                        </div>
                        <div className= "numberQuestion">
                            <h2 className="fontNumber">1/15</h2>
                        </div>     
                    <div className = "equipeContainer">
                        <div className = "equipe1" >
                                <h3 className ="fontEquipe">Equipe 1</h3>
                                <h4>0</h4>
                        </div>
                        {this.copyTrackList(this.props.playlist.tracks)}
                            <div className = "equipe2" >
                                <h3 className="fontEquipe">Equipe 2</h3>
                                <h4>0</h4>
                            </div> 
                    </div>   
                </div> 
                </div>
            </div>
        )
    }
}