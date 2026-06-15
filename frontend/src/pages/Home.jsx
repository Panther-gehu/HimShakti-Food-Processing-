import Hero from "../Components/Hero";
import About from "../Components/About";
import WhyChooseUs from "../Components/WhyChooseUs";
import ProductSection from "../Components/ProductSection";
import AIGenerator from "../Components/AIGenerator";
import ContactSection from "../Components/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <ProductSection />
      <AIGenerator />
      <ContactSection />
    </>
  );
}

export default Home;