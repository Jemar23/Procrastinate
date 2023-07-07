"use client"
import { Children } from '../Types'
import Sleep from './Sleep';
import { useToggleContent } from '../Store'

export default function SpotifyCard({ children }: Children) {
  const { isVisible, setContent } = useToggleContent();

  const handleOnClick = () => {
    setContent(!isVisible);
  }

  if (isVisible) {
    return <Sleep />;
  }
  
    return (
        <div className="relative flex items-center justify-center text-center m-8 p-24 w-full h-96 bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg overflow-hidden">
          {children}
          <button
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold"
            onClick={handleOnClick}
          >
            X
          </button>
        </div>
      );
}