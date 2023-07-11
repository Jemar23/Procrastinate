"use client"
import { Children } from '../Types'
import { useToggleYoutubeContent } from '../Store'
import { YoutubeIcon } from '../Util/Icon'

export default function YoutubeCard({ children }: Children) {
  const { isVisible, setYoutubeContent } = useToggleYoutubeContent();

  const handleOnClick = () => {
    setYoutubeContent(isVisible);
  }

    return (
        <div className="relative flex items-center justify-center text-center m-8 p-24 w-full h-96 bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg overflow-hidden">
          {isVisible ? children : <YoutubeIcon />}
        </div>
      );
}