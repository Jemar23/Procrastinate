import Image from 'next/image'
import Break from './Break'
import Nav from './Nav'
import Focus from './Focus'
import FocusTimer from './Util/FocusTimer'
import BreakTimer from './Util/BreakTimer'
import SpotifyCard from './Util/SpotifyCard'
import YoutubeCard from './Util/YoutubeCard'
import TwitchCard from './Util/TwitchCard'
import Twitch from './Twitch/TwitchContent'
import Spotify from './Spotify/SpotifyContent'
import Youtube from './Youtube/YoutubeContent'
import SpotifySwitch from './Switches/SpotifySwitch'
import YouTubeSwitch from './Switches/YouTubeSwitch'
import TwitchSwitch from './Switches/TwitchSwitch'
import TodoAppButton from './Util/TodoAppButton'

export default function Home() {
  return (
    <main>
      <div>
        <Nav>
          <TwitchSwitch />
          <SpotifySwitch />
          Procrastinate
          <YouTubeSwitch />
          <TodoAppButton />
        </Nav>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2">
          <Focus>
            <FocusTimer />
          </Focus>
          <Break>
            <BreakTimer />
          </Break>
        </div>
         <div className="grid justify-items-center gap-4 grid-cols-1 md:grid-cols-3">
            <TwitchCard>
              <Twitch />
            </TwitchCard>
            <SpotifyCard>
              <Spotify />
            </SpotifyCard>
            <YoutubeCard>
              <Youtube />
            </YoutubeCard>
          </div> 
      </div>
    </main>
  )
}
