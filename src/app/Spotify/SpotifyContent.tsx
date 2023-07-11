'use client'
import React, { useState } from 'react'

export default function SpotifyContent() {
    const [playlist, setPlaylist] = useState("https://open.spotify.com/embed/playlist/4x9OtLt7bsmvqktbF0Y0Gm?utm_source=oembed");
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