'use client'
import React, { useState } from 'react'
import TwitchInput from '../Twitch/TwitchInput'

export default function Twitch() {
    const [creator, setCreator] = useState('tarik');
  
    const handleChangeContentCreator = (updatedContentCreator: any) => {
      setCreator(updatedContentCreator);
    };
  
    return (
      <>
      <div className="absolute inset-x-0 bottom-0">
        <TwitchInput handleChangeContentCreator={handleChangeContentCreator} />
      </div>
      <div className="object-fill">
        <TwitchContent creator={creator} /> 
      </div>
      </>
    );
  }

 function TwitchContent({ creator }: any) {
    return(
        <>
        <iframe
            src={`https://player.twitch.tv/?channel=${creator}&parent=procrastinate-snowy.vercel.app`}
            height="380"
            width="550"
            allowFullScreen
            ></iframe> 
        </>
    );
}