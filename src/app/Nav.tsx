import { Children } from "./Types"

export default function Nav({children}: Children) {
    return(
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-center text-4xl md:text-[1rem] leading-normal font-extrabold text-gray-50">
            {children}
        </div>
    );
}