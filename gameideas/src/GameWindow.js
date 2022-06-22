import './App.css';
import React, { useEffect, useState } from 'react';
import ImgQuality from './ImgQuality';

function GameWindow(props) {

    const [name, setName] = useState(props.name)
    const [screenUrl, setScreenUrl] = useState(props.url)
    const [screenFullurl, setScreenFullurl] = useState("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + screenUrl + ".jpg")
    const [coverUrl, setCoverUrl] = useState(props.cover)
    const [coverFullurl, setCoverFullurl] = useState("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + coverUrl + ".jpg")


    var qual = ImgQuality(0);

    if (name == null || screenUrl == null || coverUrl == null) {
        setName('loading')
        setScreenUrl('')
        setScreenFullurl("/logo192.png")
        setCoverUrl('')
        setCoverFullurl("/logo192.png")
    }

    //Name update
    useEffect (() =>{
        setName(props.name)
    },[props.name])

    //Screenshot update
    useEffect (() =>{
        if (props.url == null) {
            setScreenUrl('undefined')
        } else {
            setScreenUrl(props.url)
        }
    },[props.url])

    useEffect (() =>{
        if (coverUrl != 'undefined') {
            setScreenFullurl("https://images.igdb.com/igdb/image/upload/t_" + qual + "/" + screenUrl + ".jpg")
        } else {
            setScreenFullurl("/logo192.png")
        }
    },[screenUrl])

    //Cover image update
    useEffect (() =>{
        if (props.cover == null) {
            setCoverUrl('undefined')
        } else {
            setCoverUrl(props.cover)
        }
    },[props.cover])

    useEffect (() =>{
        if (coverUrl != 'undefined') {
            setCoverFullurl("https://images.igdb.com/igdb/image/upload/t_" + 'cover_big' + "/" + coverUrl + ".jpg")
        } else {
            setCoverFullurl("/logo192.png")
        }
    },[coverUrl])

    return(
    <div className='GameWindow'>
        <div>{name}</div>
        <img src={screenFullurl}></img>
        <img src={coverFullurl}></img>
    </div>
    );
}

export default GameWindow;