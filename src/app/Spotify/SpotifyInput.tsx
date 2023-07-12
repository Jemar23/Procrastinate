'use client'

import { useState } from "react";

export default function SpotifyInput({ handleChangePlaylist }: any) {
    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        setValue(e.target.value);
      };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            handleChangePlaylist(value);
        }
      };
    return(
        <>
            <input 
            className="text-white bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg"
            type="text"
            value={value}
            placeholder="Paste Playlist URL"
            onChange={handleChange}
            onKeyDown={handleKeyDown}>
            </input>
        </>
    );
}