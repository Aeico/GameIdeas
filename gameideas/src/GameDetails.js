import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import ImgQuality from './ImgQuality';
import SearchGames from './SearchGames';

function GameDetails(props, searchTerm) {

    var gameName = props.SearchGameName;
    if (gameName == null) {
        gameName = searchTerm;
    }

    const [game, setGame] = useState([]);

    const baseImg = 'ypa0eo6w0nouqaibnwdl';

    const [image, setImage] = useState(baseImg);

    const gameReply = async () => {
        var resp = await SearchGames(gameName);
        setGame(resp['game_name']);
        setImage(resp['url'][props.number]);
    };

    useEffect(() => {
        gameReply();
    },[props.SearchGameName]);
    useEffect(() => {
        if (image != baseImg) { //Temp fix for Image loss
            setImageUrl("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + image + ".jpg")
        }
    }, [image]); 
 
    var qual = ImgQuality(0);

    const [imageUrl, setImageUrl] = useState("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + image + ".jpg");

    return(
    <div className='GameDetails'>
        <div>{game[props.number]}</div>
        <img src={imageUrl}></img>
    </div>);
}

export default GameDetails;