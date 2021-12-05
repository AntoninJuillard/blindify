import React, { Component } from "react";
import './Homepage.css';
import Searchbar from "../Searchbar/Searchbar";
import Playlist from "../Playlist/Playlist";
import icon from '../../img/BlindifyLogo.png'
import { useState } from 'react'
import Game from '../Game/Game'

export type PlaylistsState = {
  playlist:
    {
      id: number,
      cover: string,
      name: string, 
      tracks: {artist:string, trackname:string}[]
    }[],
  playlistSelected: 
    {
      id: number,
      name: string
    }
}




export default class Homepage extends React.Component<{}, PlaylistsState>{
    state = {
      playlist: [
        {
          id: 1,
          cover: 'black',
          name: 'playlist1',
          tracks: [
            {artist: 'artiste1', trackname: 'titre1'},
            {artist: 'artiste2', trackname: 'titre2'},
            {artist: 'artiste3', trackname: 'titre3'},
            {artist: 'artiste4', trackname: 'titre4'},
            {artist: 'artiste5', trackname: 'titre5'},
            {artist: 'artiste6', trackname: 'titre6'},
            {artist: 'artiste7', trackname: 'titre7'},
            {artist: 'artiste8', trackname: 'titre8'},
            {artist: 'artiste9', trackname: 'titre9'},
            {artist: 'artiste10', trackname: 'titre10'}
          ]
        },
        
        
      ],
      playlistSelected: 
        {
          id: 0,
          name: '',
          tracks: [{artist:'bibi', trackname:''}]
          
        }
    }

    

    // handleSelect = (playlistClicked: { id: number; }) => {
    //   const playlistSelect = [this.state.playlistSelected];
    //   playlistSelect.push(playlistClicked);
    //   this.setState({playlistSelected : playlistSelect })
    // }

    handleSelect = (playlistClickedId:number, playlistClickedName:string, playlistTrackList:{artist:string, trackname:string}[] ) => {
      let playlistSelected = { id:playlistClickedId, name: playlistClickedName, tracks:playlistTrackList}
      let playlist = this.state.playlist
      let playlistNewState = {playlist, playlistSelected}


      this.setState(playlistNewState) 
    }
    //sdilj={this.handleSelect}
  
    // SI id = 0 render la homepage 
    
    


    render() {
        
          if(this.state.playlistSelected.id === 0 ){
          return (
          
            <div className="Homepage">
              
                <section className="section1">
                    <img src={ icon } alt="Blindify Logo"/>
                    <h1>Jouez au Blindtest musical avec vos amis !</h1>
                    <h2>Jouez maintenant à Blindify et découvrez qui a la meilleure culture musicale</h2>
                    <a href="#section2" className="playButton">Jouer maintenant</a>
                </section>
                <section className="section2" id="section2">
                    <div className="rectangle rectangle1"></div>
                    <div className="rectangle rectangle2"></div>
                    <div className="rectangle rectangle3"></div>
                    <h2>Cliquez sur une playlist pour commencer le blindtest</h2>
                    <input type="text" placeholder="recherchez la catégorie que vous voulez..." className="searchbar"/>
                    <p>Playlists</p>
                </section>
                <section className="section3" >
                  
                    
                    <Playlist playlists={this.state.playlist} handleSelect={this.handleSelect} />
                </section>
            </div>
        )
        }

        
        else {
           return (
             <div>
               <Game playlist={this.state.playlistSelected}/>
             </div>
           )
         }
        
    }
    // SI id > 0 render le composant game
}

