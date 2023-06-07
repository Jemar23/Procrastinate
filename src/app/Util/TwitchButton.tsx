import { TwitchIcon } from '../Util/Icon'

export default function TwitchButton() {
    return(
        <div className="flex items-center justify-center text-center m-8 p-8 w-24 bg-transparent backdrop-blur-2xl dark:border-purple-800 rounded-md border border-slate-600 shadow-lg hover:shadow-purple-700 overflow-hidden">
            <TwitchIcon />
        </div>
    );
}