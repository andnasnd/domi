import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SplashScreen from '../components/Splash';
import mong from '../static/mong.mp3';


function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const audio = new Audio(mong);


  const handleButtonClick = () => {
    setIsClicked(true);
    setShowVideo(true);

    audio.loop = true;
    audio.play().catch((error) => {
      console.error('Audio playback error:', error);
    });
  };

    useEffect(() => {
      // You can also add a listener for audio playback
      audio.addEventListener('ended', () => {
        // Audio playback has ended
      });

      // Clean up the event listener when the component unmounts
      return () => {
        audio.removeEventListener('ended', () => {
          // Clean-up code, if needed
        });
      };
    }, [audio]);

  return (
    <>
      {!isClicked ? (
        <SplashScreen onClick={handleButtonClick} />
      ) : (
        <Card showVideo={showVideo} />
      )}
    </>
  );
}

export default Home;