import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import ImgQuality from './ImgQuality';
import SearchGames from './SearchGames';

function GameDetails(props) {

    const [games, setGames] = useState([]);

    const gameReply = async () => {
        var resp = await SearchGames('Halo');
        setGames(resp['game_name']);
    };

    useEffect(() => {
        gameReply();
    }, []);

    var qual = ImgQuality(0);

    var imgId = "ypa0eo6w0nouqaibnwdl";

    var imageUrl = "https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + imgId + ".jpg";

    return(
    <div className='GameDetails'>
        <div>{games[props.number]}</div>
        <img src={imageUrl}></img>
    </div>);
}

export default GameDetails;