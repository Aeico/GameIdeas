import './App.css';
import React, { useEffect, useState } from 'react';
import ImgQuality from './ImgQuality';

function GameWindow(props) {

    const baseUrl = 'https://images.igdb.com/igdb/image/upload/t_';
    const coverQual = ImgQuality(1,'cover');

    const [gameData, setGameData] = useState(props.data)

    const [largeWindow, setLargeWindow] = useState(false)

    useEffect (() =>{
        setGameData(props.data)
    },[props.data])

    const openGame = () => {
        console.log("hi")
    }

    return(
    <div className='GameWindow'>
        <div className='GameName'>{gameData['game_name'][props.num]}</div>
        <img className='CoverImage' onClick={openGame} src={baseUrl+coverQual+"/"+gameData['cover'][props.num]+".jpg"}></img>
        <div className='Summary'>{gameData['summary'][props.num]}</div>
    </div>
    );
}

export default GameWindow;