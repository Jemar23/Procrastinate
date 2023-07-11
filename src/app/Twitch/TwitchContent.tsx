'use client'
import React, { useState } from 'react'

export default function TwitchContent() {
    const [playlist, setPlaylist] = useState("https://player.twitch.tv/?channel=tarik&parent=localhost");
    return(
        <>
        <iframe
            src={playlist}
            height="380"
            width="100%"
            allowFullScreen
            ></iframe> 
        </>
    );
}