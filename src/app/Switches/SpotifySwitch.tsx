"use client"
import SwitchForSpotify from "@/components/ui/SwitchForSpotify";
import { useToggleContent } from "../Store";

export default function SpotifySwitch() {
    const { isVisible, setContent } = useToggleContent();

    const handleCheckedChange = () => {
        setContent(!isVisible)
    }
    
    return(
        <div>
            <SwitchForSpotify onCheckedChange={handleCheckedChange} /> <div>Spotify</div>
        </div>
    );
}



