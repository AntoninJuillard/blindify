import React, { Component } from 'react';
import './Game.css';

export default class Game extends Component {
    render() {
        return (
            <div>
                <div className='background'></div>
                 <img src={Logo}></img>
            </div>
        )
    }
}
