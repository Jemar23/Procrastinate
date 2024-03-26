"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TwitchSave() {
    return(
        <div className="relative flex items-center justify-center text-center p-24 w-full h-full bg-transparent backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-md border border-slate-600 shadow-lg overflow-hidden">
            <div className="flex flex-col items-center">
                <div className="pb-4">
                    <TwitchInput /> 
                </div>
                <div className="grid grid-cols-4 mt-4">
                    {localStorage.getItem("twitchCreator")}
                </div>
            </div>
        </div>
    )
}

function TwitchInput() {
    const [twitchCreator, setTwitchCreator] = useState("");

    const handleInputChange = (e: any) => {
        setTwitchCreator(e.target.value)
    }

    const handleSaveClick = () => {
        localStorage.setItem('twitchCreator', twitchCreator);
      };

    return(
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
            type="text" 
            placeholder="Twitch Creator"
            value={twitchCreator}
            onChange={handleInputChange}
         />
        <Button 
            type="submit"
            onClick={handleSaveClick}>Save</Button>
      </div>
    );
}