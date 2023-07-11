"use client"
import { TwitchIcon } from '../Util/Icon'
import { useToggleTwitchContent } from '../Store'

export default function TwitchButton() {
    const { isVisible, setTwitchContent } = useToggleTwitchContent();

   const handleOnClick = () => {
     setTwitchContent(!isVisible);
   }
    return(
        <button onClick={handleOnClick} className="flex items-center justify-center text-center m-8 p-8 w-24 bg-transparent backdrop-blur-2xl dark:border-purple-800 rounded-md border border-slate-600 shadow-lg hover:shadow-purple-700 overflow-hidden">
            <TwitchIcon />
        </button>
    );
}