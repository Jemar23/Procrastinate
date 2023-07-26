import Image from 'next/image'
import Break from './Break'
import Nav from './Nav'
import Focus from './Focus'
import FocusTimer from './Util/FocusTimer'
import BreakTimer from './Util/BreakTimer'
import SpotifyCard from './Util/SpotifyCard'
import YoutubeCard from './Util/YoutubeCard'
import TwitchCard from './Util/TwitchCard'
import TwitchButton from './Util/TwitchButton'
import YoutubeButton from './Util/YoutubeButton'
import SpotifyButton from './Util/SpotifyButton'
import Twitch from './Twitch/TwitchContent'
import Spotify from './Spotify/SpotifyContent'
import Youtube from './Youtube/YoutubeContent'

export default function Home() {
  return (
    <main>
      <div>
        <Nav>Procrastinate</Nav>
        <div className="flex justify-center grid-cols-2">
          <Focus>
            <FocusTimer />
          </Focus>
          <Break>
            <BreakTimer />
          </Break>
        </div>
         <div className="flex justify-between grid-cols-3">
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
        <div className="flex flex-col static">
         <div className="flex justify-around grid-cols-3 absolute inset-x-0 bottom-0 m-8">
           <TwitchButton />
           <SpotifyButton />
           <YoutubeButton />
          </div>
        </div>
      </div>
    </main>
  )
}
