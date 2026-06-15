import heroImage from "../assets/image/terrace.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ), url(${heroImage})`,
      }}
    >
      <div className="max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Natural Goodness From Uttarakhand
        </h1>

        <p className="text-lg md:text-2xl leading-relaxed mb-10">
          Discover authentic, healthy, and locally sourced food products
          crafted with tradition, quality, and care by HimShakti Food
          Processing.
        </p>

        
      </div>
    </section>
  );
}

export default Hero;