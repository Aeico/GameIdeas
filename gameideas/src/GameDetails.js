import './App.css';
import React from 'react';
import ImgQuality from './ImgQuality';

function GameDetails(props) {
    

    var qual = ImgQuality(2);

    var imgId = "ypa0eo6w0nouqaibnwdl"

    var imageUrl = "https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + imgId + ".jpg";

    return(
    <div className='GameDetails'>
        <img src={imageUrl}></img>
    </div>);
}

export default GameDetails;