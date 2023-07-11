"use client"
import { Children } from '../Types'
import { useToggleTwitchContent } from '../Store'
import { TwitchIcon } from '../Util/Icon'

export default function TwitchCard({ children }: Children) {
  const { isVisible, setTwitchContent } = useToggleTwitchContent();

  const handleOnClick = () => {
    setTwitchContent(isVisible);
  }

    return (
        <div className="relative flex items-center justify-center text-center m-8 p-24 w-full h-96 bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg overflow-hidden">
          {isVisible ? children : <TwitchIcon />}
        </div>
      );
}