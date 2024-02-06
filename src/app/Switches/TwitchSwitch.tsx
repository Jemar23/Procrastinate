"use client"
import SwitchForTwitch from "@/components/ui/SwitchForTwitch";
import { useToggleTwitchContent } from "../Store";

export default function TwitchSwitch() {
    const { isVisible, setTwitchContent } = useToggleTwitchContent();

    const handleCheckedChange = () => {
        setTwitchContent(!isVisible)
    }
    
    return(
        <div>
            <SwitchForTwitch onCheckedChange={handleCheckedChange} /> <div>Twitch</div>
        </div>
    );
}