"use client"
import { SpotifyIcon } from '../Util/Icon'
import { useToggleContent } from '../Store'

export default function SpotifyButton() {
   const { isVisible, setContent } = useToggleContent();

   const handleOnClick = () => {
     setContent(!isVisible);
   }

    return(
        <button onClick={handleOnClick} className="flex items-center justify-center text-center m-8 p-8 w-24 bg-transparent backdrop-blur-2xl dark:border-green-800 rounded-md border border-green-600 shadow-lg hover:shadow-green-700 overflow-hidden">
            <SpotifyIcon />
        </button>
    );
}