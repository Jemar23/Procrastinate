import Image from 'next/image'
import Timer from './Timer'
import Nav from './Nav'
import Draw from './Draw'
import SpotifyCard from './Util/SpotifyCard'
import Sleep from './Util/Sleep';
import TwitchButton from './Util/TwitchButton'
import YoutubeButton from './Util/YoutubeButton'
import SpotifyButton from './Util/SpotifyButton'

export default function Home() {
  return (
    <main>
      <div>
        <Nav>Procrastinate</Nav>
        <div className="flex justify-center grid-cols-2">
          <Draw>Excalidraw Here</Draw>
          <Timer>Timer Here</Timer>
        </div>
         <div className="flex justify-between grid-cols-3">
            <Sleep />
            <SpotifyCard>Content!</SpotifyCard>
            <Sleep />
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
