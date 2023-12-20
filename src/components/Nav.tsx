export default function Nav() {
  const boxSize = 'w-18 h-18'; // You can adjust the size here

  return (
    <>
      <div className="absolute left-0 right-0 bottom-0 bg-yellow-300 z-20">
        <div className="flex justify-center">
          <a
            className={`flex items-center justify-center rounded-lg bg-yellow-300 px-8 py-2.5 text-white hover:bg-yellow-400 focus:ring-[#ff084f] ${boxSize}`}
            href="https://solscan.io/token/3cy8N3asQY3WKBWaeBY3MzBQzbD4Mpy1nyGYoYKdNioA#txs"
          >
            <img
              className="h-6 w-6"
              src="/solscan.png"
              alt="solscan logo"
            />
          </a>
          <a
            className={`hover-bg-pink-300 flex items-center justify-center rounded-lg bg-yellow-300 px-8 py-2.5 text-white hover:bg-yellow-400 focus:outline-none focus:ring-[#ff084f] ${boxSize}`}
            href="https://birdeye.so/"
          >
            <img
              className="h-8 w-9"
              src="/bird.png"
              alt="birdeye logo"
            />
          </a>
          <a
            className={`hover-bg-pink-300 flex items-center justify-center rounded-lg bg-yellow-300 px-8 py-2.5 text-white hover:bg-yellow-400 focus:outline-none focus:ring-[#ff084f] ${boxSize}`}
            href="https://t.me/domlopez"
          >
            <img className="h-6 w-6" src="/tg-logo.svg" alt="telegram logo" />
          </a>
          <a
            className={`hover-bg-pink-300 flex items-center justify-center rounded-lg bg-yellow-300 px-8 py-2.5 text-white hover:bg-yellow-400 focus:outline-none focus:ring-[#ff084f] ${boxSize}`}
            href="https://twitter.com/ExodiaBTC"
          >
            <img className="h-6 w-6" src="/logo.svg" alt="x logo" />
          </a>
        </div>
      </div>
    </>
  );
}
