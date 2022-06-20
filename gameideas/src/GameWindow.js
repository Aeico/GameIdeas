import './App.css';
import React, { useEffect, useState } from 'react';
import ImgQuality from './ImgQuality';

function GameWindow(props) {

    const [name, setName] = useState(props.name)
    const [url, setUrl] = useState(props.url)
    const [fullurl, setFullurl] = useState("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + url + ".jpg")

    var qual = ImgQuality(0);

    if (name == null) {
        setName('loading')
        setUrl('sc92is')
        setFullurl("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + url + ".jpg")
    }

    useEffect (() =>{
        setName(props.name)
    },[props.name])

    useEffect (() =>{
        setUrl(props.url)
    },[props.url])

    useEffect (() =>{
        setFullurl("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + url + ".jpg")
    },[url])

    return(
    <div className='GameWindow'>
        <div>{name}</div>
        <img src={fullurl}></img>
    </div>
    );
}

export default GameWindow;