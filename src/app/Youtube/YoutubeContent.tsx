'use client'
import React, { useState } from 'react'

export default function YoutubeContent() {
    const [playlist, setPlaylist] = useState("http://www.youtube.com/embed/lTRiuFIWV54?enablejsapi=1");
    return(
        <>
        <iframe
            src={playlist}
            height="380"
            width="100%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe> 
        </>
    );
}