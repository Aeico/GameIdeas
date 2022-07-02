import './App.css';
import React, { useEffect, useState } from 'react';
import ImgQuality from './ImgQuality';

function GameWindow(props) {

    const baseUrl = 'https://images.igdb.com/igdb/image/upload/t_';
    const coverQual = ImgQuality(1,'cover');

    const [gameData, setGameData] = useState(props.data)
    
    const [fontSize, setFontSize] = useState('26')

    const [largeWindow, setLargeWindow] = useState(false)

    useEffect (() =>{
        setGameData(props.data)
        if (gameData['game_name'][props.num] != undefined) {
            if ((gameData['game_name'][props.num]).length > 15) {
                setFontSize(26-((gameData['game_name'][props.num]).length)/10)
            }
        }
    },[props.data])

    return(
    <div className='GameWindow'>
        <div className='Cover'>
            <img className='CoverImage' onClick={() => props.openGame(props.num)} src={baseUrl+coverQual+"/"+gameData['cover'][props.num]+".jpg"}></img>
            <div className='CoverText' style={{fontSize : fontSize+'px'}}>{gameData['game_name'][props.num]}</div>
        </div>
    </div>
    );
}

export default GameWindow;