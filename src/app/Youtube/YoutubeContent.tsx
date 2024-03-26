'use client'
import React, { useState } from 'react';
import YoutubeInput from './YoutubeInput';

export default function Youtube() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=CgwWiExgO3I");

  const handleChangeUrl = (updatedPlaylist: any) => {
    setUrl(updatedPlaylist);
  };

  return (
    <>
      <div className="absolute inset-x-0 bottom-0">
        <YoutubeInput handleChangeUrl={handleChangeUrl} />
      </div>
      <div className="object-fill">
        <YoutubeContent url={url} />
      </div>
    </>
  );
}

function YoutubeContent({ url }: any) {
    const urlEmbed = formatYoutubeEmbedUrl(url)
    console.log(urlEmbed)
    return(
        <>
        <iframe
            className='rounded-md'
            src={urlEmbed}
            height="380"
            width="550"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe> 
        </>
    );
}

function formatYoutubeEmbedUrl(u: string): string {
    let videoId: string = "";
  
    // Check if the URL is valid
    if (u.includes("youtube.com/watch?v=")) {
      videoId = u.split("youtube.com/watch?v=")[1].split("&")[0];
    } else if (u.includes("youtu.be/")) {
      videoId = u.split("youtu.be/")[1].split("?")[0];
    }
  
    // Construct the embed URL
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
      console.log(embedUrl)
      return embedUrl;
    }
  
    return "";
  }
  