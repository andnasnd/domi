import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";
import useClipboard from 'react-use-clipboard';
import Nav from '../components/Nav';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import videoBackground from "../static/domm.mp4";


// Define the prop type for showVideo
// trigger build
type CardProps = {
  showVideo: boolean;
};

export default function Card({ showVideo }: CardProps) {

  const [isCopied, setCopied] = useClipboard(
    '8QjEab1HptdTubZEdDgyNi3wbhfBK7ufdQkcVmcE9NfS',
    {
      successDuration: 2500,
    },
  );
  return (
    <>
      <div min-h-screen>
      <div className="bg-[url('/jgg.jpg')] h-screen bg-cover relative w-screen">
      {showVideo && (
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute top-0 left-0 w-1/4 object-cover z-0"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {showVideo && (
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute top-0 right-0 w-1/4 object-cover z-0"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
        <Marquee
          autoFill
          direction="right"
          className="py-1 text-xl text-white bg-yellow-300 font-bold absolute"
          >
          <a href="https://birdeye.so">
            $DOM IS LIVE &nbsp; &nbsp; &nbsp;
          </a>
        </Marquee>
        <div>
          <a href="https://birdeye.so">
              <img
                style={{
                  animation: "jiggle1 8s ease-in-out infinite", // Apply the animation inline
                }}
                className="absolute left-4 top-24 w-[72px]" src="bird.png" alt="tg" />
            </a>
          <a href="https://twitter.com/ExodiaBTC">
              <img
                style={{
                  animation: "jiggle1 8s ease-in-out infinite", // Apply the animation inline
                }}
                className="absolute right-8 top-24 mt-2 mr-2 w-12" src="logo.svg" alt="tg" />
            </a>
          <a href="https://solscan.io/account/">
              <img
                style={{
                  animation: "jiggle1 8s ease-in-out infinite", // Apply the animation inline
                }}
                className="absolute left-52 top-24 w-[60px]" src="solscan.png" alt="solscan" />
            </a>
            <a href="https://t.me/domlopez">
              <img
                style={{
                  animation: "jiggle1 8s ease-in-out infinite", // Apply the animation inline
                }}
                className="absolute left-28 w-16 top-24" src="tg-logo.svg" alt="tg" />
            </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center absolute top-[10%] inset-0 z-0">
            <img src="flor.png" alt="game" className="z-0 opacity-75"  style={{
                animation: "jiggle2 3s ease-in-out infinite", // Apply the animation inline
                }} />
          </div>
          <div className="absolute top-[40%] scale-[80%] md:scale-[160%] rounded-3xl text-center z-10" style={{ overflow: 'hidden' }}>
          <div className="bg-black bg-opacity-40 rounded-lg py-8 overflow-x-hidden">
            {/* Contents of the transparent div */}
            <h5 className="mb-2 text-8xl font-serif font-bold text-yellow-300">$DOM</h5>
            <div className="mt-5 text-md font-bold text-yellow-300 overflow-hidden">
              <div className="p-2">8QjEab1HptdTubZEdDgyNi3wbhfBK7ufdQkcVmcE9NfS</div>
            </div>    
        <p className="mb-5 text-base text-orange-400 sm:text-lg"></p>
            <div className="justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <button onClick={setCopied}>
                  {isCopied ? (
                    <a
                      className="flex w-full items-center justify-center rounded-lg bg-yellow-300 px-4 py-2.5 text-white hover:bg-yellow-400 focus:outline-none focus:ring-yellow-200 sm:w-auto"
                      href="#"
                    >
                      <h1 className="w-8 text-2xl">✅</h1>
                      <div className="mx-4">
                        <div className="mb-1 text-xs">$DOM</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">
                          Contract
                        </div>
                      </div>
                    </a>
                  ) : (
                    <a
                      className="flex w-full items-center justify-center rounded-lg bg-yellow-300 px-4 py-2.5 text-white hover:bg-yellow-400 focus:outline-none focus:ring-yellow-200 sm:w-auto"
                      href=""
                    >
                      <img
                        className="w-8 h-6"
                        src="/link-icon.svg"
                        alt="link icon"
                      />
                      <div className="mx-4">
                        <div className="mb-1 text-xs font-serif">$DOM</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">
                          Contract
                        </div>
                      </div>
                    </a>
                  )}
                </button>
                  <a
                    className="w-40 mx-auto flex items-center justify-center rounded-lg bg-yellow-300 px-4 py-2.5 text-white hover:bg-yellow-400 focus:outline-none focus:ring-orange-300"
                    href="https://t.me/domlopez"
                  >
                    <img className="w-9" src="/tg-logo.svg" alt="telegram logo" />
                    <div className="mx-4">
                      <div className="mb-1 text-xs">Join Our</div>
                      <div className="-mt-1 font-sans text-sm font-semibold">
                        Telegram
                      </div>
                    </div>
                  </a>
              </div>
              <div>
                <h1 className="font-sans text-yellow-300 text-xs absolute bottom-2 right-1/4 left-1/4">domlopez.hedgefund@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
            /* styles.css */
              @keyframes jiggle1 {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
              100% {
                transform: translateY(0);
              }
            }

            @keyframes jiggle2 {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-15px); /* Different from the first image */
              }
              100% {
                transform: translateY(0);
              }
            }

          .custom-font {
            font-family: 'Akshar', sans-serif;
          }

            `}
        </style>
        </div>
      </div>
<div className="bg-black pb-48 text-center pt-48 text-6xl font-bold text-yellow-300 z-1000">
  <h1 className="text-5xl mb-4 mt-24">
    Total Supply: <span className="text-yellow-200 z-1000">690,000,000 </span> <span className="font-serif">$DOM</span>
  </h1>
  <br />
  <h1 className="text-3xl mx-auto font-bold bg-black">
    Dom Lopez Coin brought to you by Dominic Lopez. 
    <span className="text-yellow-200 text-4xl"> Real Hedge Fund shit.</span>
  </h1>
</div>

      <div className="bg-black flex items-center justify-center">

      </div>
        <div className="flex pt-[5%] flex-col-reverse md:flex-row bg-black">
          <div className="flex flex-col justify-center items-center">
            <Carousel autoPlay infiniteLoop  className="w-[25%] mx-auto">
              <div>
                <img src="dom0.jpg" alt="" />
              </div>
              <div>
                <img src="dom2.jpg" alt="" />
              </div>
              <div>
                <img src="dom3.jpg" alt="" />
              </div>
              <div>
                <img src="dom4.jpg" alt="" />
              </div>
              <div>
                <img src="dom5.jpg" alt="" />
              </div>
              <div>
                <img src="dom6.jpg" alt="" />
              </div>
              <div>
                <img src="dom7.jpg" alt="" />
              </div>
              <div>
                <img src="dom8.jpg" alt="" />
              </div>
              <div>
                <img src="dom9.jpg" alt="" />
              </div>
              <div>
                <img src="dom10.jpg" alt="" />
              </div>
              <div>
                <img src="dom11.jpg" alt="" />
              </div>
              <div>
                <img src="dom12.jpg" alt="" />
              </div>
              <div>
                <img src="dom13.jpg" alt="" />
              </div>
              <div>
                <img src="dom14.jpg" alt="" />
              </div>
              <div>
                <img src="dom15.jpg" alt="" />
              </div>
            </Carousel>
          </div>
       </div>
       <div className="h-[100px] sm:h-[400px] bg-black"></div>
      <div className="fixed bottom-0 left-0 w-screen">
        <Nav />
      </div>
    </>
  );
}