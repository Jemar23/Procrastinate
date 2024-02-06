"use client"
import SwitchForYouTube from "@/components/ui/SwitchForYouTube";
import { useToggleYoutubeContent } from "../Store";

export default function YouTubeSwitch() {
    const { isVisible, setYoutubeContent } = useToggleYoutubeContent();

    const handleCheckedChange = () => {
        setYoutubeContent(!isVisible)
    }
    
    return(
        <div>
            <SwitchForYouTube onCheckedChange={handleCheckedChange} /> <div>YouTube</div>
        </div>
    );
}