import Hero from "../Components/Hero";
import About from "../Components/About";
import WhyChooseUs from "../Components/WhyChooseUs";
import ProductSection from "../Components/ProductSection";
import AIGenerator from "../Components/AIGenerator";
import ContactSection from "../Components/ContactSection";

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <About />

<div className="h-32"></div>

<WhyChooseUs />
      <ProductSection />

<div className="h-32"></div>

<AIGenerator />
      <ContactSection />
    </div>
  );
}

export default Home;
