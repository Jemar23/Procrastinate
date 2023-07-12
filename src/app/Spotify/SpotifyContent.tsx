'use client'
import React, { useState } from 'react';
import SpotifyInput from './SpotifyInput';

export default function Spotify() {
  const [playlist, setPlaylist] = useState("05OkqemhVmD27zXfdnyNsy");

  const handleChangePlaylist = (updatedPlaylist: any) => {
    const parsedPlaylist = parseSpotifyPlaylist(updatedPlaylist);
    console.log(parsedPlaylist)
    setPlaylist(parsedPlaylist);
  };

  return (
    <>
      <div className="absolute inset-x-0 bottom-0">
        <SpotifyInput handleChangePlaylist={handleChangePlaylist} />
      </div>
      <div className="object-fill">
        <SpotifyContent playlist={playlist} />
      </div>
    </>
  );
}

function SpotifyContent({ playlist }: any) {
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlist}`;

  return (
    <>
      <iframe
        src={`${embedUrl}?utm_source=oembed`}
        height="380"
        width="550"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </>
  );
}

function parseSpotifyPlaylist(url: string): string {
  if (url.includes('/embed/')) {
    // Playlist URL already contains /embed/ part
    return url;
  }

  const playlistId = url.split('/').pop();
  const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}`;
  return embedUrl;
}
