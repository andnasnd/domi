import { useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

type Props = {
  onClick: () => void;
};

export default function SplashScreen({ onClick }: Props) {
  const [value, setValue] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    play();
  }, [value]);

  function play() {
    if (value >= 1) {
      toggle();
      onClick();
    }
  }

  function toggle() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <>
      {!isClicked && (
        <MouseParallaxContainer
          globalFactorX={0.6}
          globalFactorY={0.6}
          className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/bapejg.jpg')] bg-black bg-cover"
        >
          <MouseParallaxChild
            factorX={0.02}
            factorY={0.02}
            className="absolute top-1/4 transform -translate-x-1/2 z-1000"
          >
            <div>
               <h1 className="font-serif text-8xl font-bold text-yellow-300 text-center">DOM LOPEZ COIN</h1>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.04}
            factorY={0.04}
            className="absolute opacity-80"
          >
            <img
              src="/flor.png"
              alt="purberry"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              className="opacity-animation"
            />
          </MouseParallaxChild>
          <MouseParallaxChild
            factorX={0.01}
            factorY={0.01}
            className="absolute inset-0 z-10 md:mt-[10%] md:ml-[25%] flex flex-col items-center justify-center"
          >
            <button
              className="font-serif my-2 pt-36 rounded-xl text-7xl font-extrabold text-[#ffe100] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 grow-shrink-animation"
              onClick={() => setValue(value + 1)}
            >
              Enter Site
            </button>
          </MouseParallaxChild>
          <p className="mb-5 text-base text-[#ff084a] sm:text-lg"></p>
        </MouseParallaxContainer>
      )}

      <style>
        {`
          .animate-pan-background {
            animation: pan-background 20s linear infinite;
          }

          .custom-font {
            font-family: 'Akshar', sans-serif;
          }

          @keyframes changeOpacity {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          .opacity-animation {
            animation: changeOpacity 5s linear infinite; /* Adjust the duration as needed */
          }

          .grow-shrink-animation {
              animation: growShrink 2s ease-in-out infinite;
            }

            @keyframes growShrink {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.2);
              }
              100% {
                transform: scale(1);
              }
            }
        `}
      </style>
    </>
  );
}
