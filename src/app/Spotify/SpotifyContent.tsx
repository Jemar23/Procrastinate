'use client'
import React, { useState } from 'react';
import SpotifyInput from './SpotifyInput';

export default function Spotify() {
  const [playlist, setPlaylist] = useState("05OkqemhVmD27zXfdnyNsy");

  const handleChangePlaylist = (updatedPlaylist: any) => {
    const parsedPlaylist = parseSpotifyPlaylist(updatedPlaylist);
    setPlaylist(parsedPlaylist);
  };

  return (
    <>
      <div className="absolute inset-x-0 bottom-0">
        <SpotifyInput handleChangePlaylist={handleChangePlaylist} />
      </div>
       <div className="flex items-center justify-center object-fill w-full h-full sm:w-full sm:h-full md:w-48 md:h-48 lg:w-96 lg:h-96 2xl:w-96 2xl:h-96">
        <SpotifyContent playlist={playlist} />
       </div>
    </>
  );
}

export function SpotifyContent({ playlist }: any) {
  const parsedPlaylist = parseSpotifyPlaylist(playlist);
  console.log(parsedPlaylist)
  return (
    <>
      <iframe
        // className="relative flex items-center justify-center text-center m-8 overflow-hidden"
        src={`${parsedPlaylist}?utm_source=oembed`}
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
