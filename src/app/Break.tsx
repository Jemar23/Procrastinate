import { Children } from "./Types"

export default function Break( { children }: Children) {
    return(
        <div className="flex items-center justify-center text-center m-8 p-24 w-96 bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg hover:shadow-indigo-500/40 overflow-hidden h-24">
          {children}
        </div>
    );
}