"use client"
import { SpotifyIcon } from '../Util/Icon'
import { useToggleStaticContent } from '../Store'
import SpotifyCard from './SpotifyCard'

export default function SpotifyButton() {
    const { isPlusVisible, setStaticContent } = useToggleStaticContent();

  const handleOnClick = () => {
    setStaticContent(true);
  }

  if (isPlusVisible) {
    return <SpotifyCard>Con</SpotifyCard>;
  }
    return(
        <button onClick={handleOnClick} className="flex items-center justify-center text-center m-8 p-8 w-24 bg-transparent backdrop-blur-2xl dark:border-green-800 rounded-md border border-green-600 shadow-lg hover:shadow-green-700 overflow-hidden">
            <SpotifyIcon />
        </button>
    );
}