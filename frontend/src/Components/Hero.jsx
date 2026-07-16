import heroImage from "../assets/image/terrace.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.45)
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-10 mx-auto">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
          Natural Goodness From Uttarakhand
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white leading-relaxed max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md">
          Discover authentic, healthy, and locally sourced food products
          crafted with tradition, quality, and care by HimShakti Food
          Processing.
        </p>

      </div>
    </section>
  );
}

export default Hero;