import About from "../Components/About";
import WhyChooseUs from "../Components/WhyChooseUs";

function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">

      <About />

      <WhyChooseUs />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto text-center translate-x-58">

    <h2 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-8">
      Our Mission
    </h2>

    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
      Our mission is to empower local farmers, preserve the rich
      food heritage of Uttarakhand, and deliver authentic,
      nutritious, and sustainably processed food products to
      customers across India.
    </p>

  </div>
</section>

    </div>
  );
}

export default AboutPage;
