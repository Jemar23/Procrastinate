"use client"
import { Children } from '../Types'
import { useToggleContent } from '../Store'
import { SpotifyIcon } from '../Util/Icon'

export default function SpotifyCard({ children }: Children) {
  const { isVisible, setContent } = useToggleContent();

  const handleOnClick = () => {
    setContent(isVisible);
  }

    return (
        <div onClick={handleOnClick} className="relative flex items-center justify-center text-center m-8 p-24 w-full h-96 bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg overflow-hidden">
          {isVisible ? children : <SpotifyIcon />}
        </div> 
      );
}